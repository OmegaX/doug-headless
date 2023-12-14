import Root from "./components"
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

const menuHandler = {
  name: "menus",
  priority: 10,
  pattern: "/menu/:slug",
  func: async ({ link, params, state, libraries }) => {
    const { slug } = params;

    // Fetch the menu data from the endpoint
    const response = await libraries.source.api.get({
      endpoint: `/menus/v1/menus/${slug}`,
    });

    // Parse the JSON to get the object
    const menuData = await response.json();

    // Add the menu items to source.data
    const menu = state.source.data[link];
    Object.assign(menu, {
      items: menuData.items,
      isMenu: true,
    });
  },
};

// Custom handler for ACF options
const acfOptionsHandler = {
  pattern: "acf-options-page",
  func: async ({ route, state, libraries }) => {
    // 1. Get ACF option page from REST API.
    const response = await libraries.source.api.get({
      endpoint: `/acf/v3/options/options`
    });
    const option = await response.json();

    // 2. Add data to `source`.
    const data = state.source.get(route);
    Object.assign(data, { ...option, isAcfOptionsPage: true });
  }
};

export default {
  name: "doug-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      menuUrl: "third",
      isContactModalOpen: false,

      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },
  actions: {
    theme: {
      openContactModal: ({ state }) => {
        state.theme.isContactModalOpen = true;
      },
      closeContactModal: ({ state }) => {
        state.theme.isContactModalOpen = false;
      },
      beforeSSR: async ({ state, actions }) => {
        await actions.source.fetch("acf-options-page");
        await actions.source.fetch(`/menu/${state.theme.menuUrl}/`);
        await actions.source.fetch("/contact");
      }
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
    source: {
      // Add the custom handler for ACF options defined above.
      handlers: [menuHandler, acfOptionsHandler]
    }
  },
};