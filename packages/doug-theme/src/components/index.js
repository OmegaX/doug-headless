import React from "react"
import { Global, css, connect, styled, Head } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import Archive from "./archive"
import Post from "./post"
import Page from "./page"
import Hero from "./hero"
import Footer from "./footer"
import Portfolio from "./portfolio"
import MainNav from "./main-nav"
import PageError from "./page-error"
import Loading from "./loading"

const theme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!./sass/variables.scss');

const Root = ({ state }) => {
	const data = state.source.get(state.router.link)

	return (
		<>
			<Global styles={globalStyles} />
			<Head>
				<title>Doug Sabiston Web Developer</title>
				<meta
					name="Doug Sabiston, Web Developer"
					content="Checkout my portfolio! Doug Sabiston, web developer. Surrey BC Canada."
				/>
			</Head>
			<Site>
				<Header>
					<Hero />
					<MainNav />
				</Header>
				<Main>
					<Switch>
						<Page when={data.isPage} />
						<Archive when={data.isArchive} />
						<Post when={data.isPost} />
						<Portfolio when={data.isPortfolio} />
						<Loading when={data.isFetching} />
						<PageError when={data.isError} />
					</Switch>
				</Main>
				<Footer />
			</Site>
		</>
	)
}

export default connect(Root)

const Header = styled.header`

`;

const Main = styled.main`

`;

const Site = styled.div`
	overflow: hidden;
	max-width: 1600px;
	margin: 0 auto;
`;

const globalStyles = css`

	@import url('https://fonts.googleapis.com/css2?family=Cherry+Cream+Soda&family=Yantramanav&display=swap');

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-family: sans-serif;
		line-height: 1.15;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: rgba(${theme.black}, 0);
	}

	body {
		background-color: ${theme.bodyBg};
		margin: 0;
		font-family: ${theme.fontFamilyBase};
		font-size: ${theme.fontSizeBase};
		font-weight: ${theme.fontWeightBase};
		line-height: ${theme.lineHeightBase};
		color: ${theme.bodyColor};
		text-align: left;

		&::-webkit-scrollbar {
			width: 1rem;
		}

		&::-webkit-scrollbar-track {
			border-left: .5px solid ${theme.black};
		}

		&::-webkit-scrollbar-thumb {
			background: ${theme.orange};
		}

		&.ReactModal__Body--open {
			overflow: hidden;
			margin-right: 1rem;
		}
	}

	.ReactModal__Overlay {

		&::-webkit-scrollbar {
			width: 1rem;
		}

		&::-webkit-scrollbar-track {
			border-left: .5px solid ${theme.black};
		}

		&::-webkit-scrollbar-thumb {
			background: ${theme.orange};
		}

		&.ReactModal__Body--open {
			overflow: hidden;
			margin-right: 1rem;
		}
	}

	article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
		display: block;
	}

	h1, h2, h3, h4, h5, h6,
	.h1, .h2, .h3, .h4, .h5, .h6 {
		margin-top: 0;
		margin-bottom: ${theme.headingsMarginBottom};
		font-family: ${theme.headingsFontFamily};
		font-weight: ${theme.headingsFontWeight};
		line-height: ${theme.headingsLineHeight};
		color: ${theme.headingsColor};
	}

	h1, .h1 { font-size: ${theme.h1FontSize}; }
	h2, .h2 { font-size: ${theme.h2FontSize}; }
	h3, .h3 { font-size: ${theme.h3FontSize}; }
	h4, .h4 { font-size: ${theme.h4FontSize}; }
	h5, .h5 { font-size: ${theme.h5FontSize}; }
	h6, .h6 { font-size: ${theme.h6FontSize}; }

	[tabindex="-1"]:focus:not(:focus-visible) {
		outline: 0 !important;
	}

	a {
		color: ${theme.linkColor};
		text-decoration: ${theme.linkDecoration};
		background-color: transparent;
		cursor: pointer;

		&:hover {
			color: ${theme.linkHoverColor};
			text-decoration: ${theme.linkHoverDecoration};
		}

		&:visited {
			color: inherit;
			text-decoration: ${theme.linkDecoration};
		}

		&:not([href]) {
			color: inherit;
			text-decoration: ${theme.linkDecoration};

			&:hover {
				color: inherit;
				text-decoration: ${theme.linkDecoration};
			}
		}
	}

	img {
		vertical-align: middle;
		border-style: none; 
		width: 100%;
		height: auto;
	}

	svg {
		overflow: hidden;
		vertical-align: middle;
	}

	table {
		border-collapse: collapse;
	}

	caption {
		padding-top: ${theme.tableCellPadding};
		padding-bottom: ${theme.tableCellPadding};
		color: ${theme.tableCaptionColor};
		text-align: left;
		caption-side: bottom;
	}

	th {
		text-align: inherit;
	}

	label {
		display: block;
		margin-bottom: ${theme.labelMarginBottom};
		text-transform: uppercase;
	}

	input,
	button,
	select,
	optgroup,
	textarea {
		margin: 0;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
	}

	input[type=text],
	input[type=search],
	input[type=url],
	input[type=tel],
	input[type=number],
	input[type=password],
	input[type=email],
	select,
	textarea {
		display: block;
		width: 100%;
		height: ${theme.inputHeight};
		padding: ${theme.inputPaddingTop} ${theme.inputPaddingRight} ${theme.inputPaddingBottom} ${theme.inputPaddingLeft};
		font-family: ${theme.inputFontFamily};
		font-size: ${theme.inputFontSize};
		font-weight: ${theme.inputFontWeight};
		line-height: ${theme.inputLineHeight};
		color: ${theme.inputColor};
		background-color: ${theme.inputBg};
		background-clip: padding-box;
		border: 0;
		border-bottom: ${theme.inputBorderWidth} solid ${theme.inputBorderColor};
		border-radius: ${theme.inputBorderRadius};
		box-shadow: ${theme.inputBoxShadow};
		transition: ${theme.inputTransition};

		&::-ms-expand {
			background-color: transparent;
			border: 0;
		}

		&:-moz-focusring {
			color: transparent;
			text-shadow: 0 0 0 ${theme.inputColor};
		}

		&::placeholder {
			color: ${theme.inputPlaceholderColor};
			opacity: 1;
		}

		&:disabled,
		&[readonly] {
			background-color: ${theme.inputDisabledBg};
			opacity: 1;
		}

		&:hover,
		&:focus {
			border-color: ${theme.orange};
			outline: 0;
			box-shadow: 0;
		}
	}

	textarea {
		height: 120px;
	}

	button,
	input {
		overflow: visible;
	}

	button,
	select {
		text-transform: none;
	}

	select {
		word-wrap: normal;

		&:focus::-ms-value {
			color: ${theme.inputColor};
			background-color: ${theme.inputBg};
		}
	}

	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
		-webkit-appearance: button;
	}

	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
		&:not(:disabled) {
			cursor: pointer;
		}
	}

	button::-moz-focus-inner,
	[type="button"]::-moz-focus-inner,
	[type="reset"]::-moz-focus-inner,
	[type="submit"]::-moz-focus-inner {
		padding: 0;
		border-style: none;
	}

	input[type="radio"],
	input[type="checkbox"] {
		box-sizing: border-box;
		padding: 0;
	}

	input[type="date"],
	input[type="time"],
	input[type="datetime-local"],
	input[type="month"] {
		-webkit-appearance: listbox;
	}

	textarea {
		overflow: auto;
		resize: vertical;
	}

	fieldset {
		min-width: 0;
		padding: 0;
		margin: 0;
		border: 0;
	}

	legend {
		display: block;
		width: 100%;
		max-width: 100%; 
		padding: 0;
		margin-bottom: .5rem;
		font-size: 1.5rem;
		line-height: inherit;
		color: inherit;
		white-space: normal;
	}

	progress {
		vertical-align: baseline;
	}

	[type="search"]::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	[hidden] {
		display: none !important;
	}

	input[type="submit"],
	.btn {
		display: inline-block;
		font-family: ${theme.btnFontFamily};
		font-weight: ${theme.btnFontWeight};
		color: ${theme.white};
		text-align: center;
		vertical-align: middle;
		user-select: none;
		background-color: ${theme.orange};
		border: ${theme.borderWidth} solid ${theme.orange};
		padding: .75rem 1.5rem;
		font-size: ${theme.btnFontSize};
		line-height: ${theme.btnLineHeight};
		border-radius: ${theme.borderRadius};
		transition: ${theme.btnTransition};

		&:visited {
			color: ${theme.white};
		}

		&:hover,
		&:focus {
			background-color: ${theme.lOrange};
			color: ${theme.white};
		}
	}

	p {
		margin-top: 0;
		margin-bottom: ${theme.paragraphMarginBottom};
	}

	address {
		margin-bottom: 1rem;
		font-style: normal;
		line-height: inherit;
	}

	ol,
	ul,
	dl {
		margin-top: 0;
		margin-bottom: 1rem;
	}

	ol ol,
	ul ul,
	ol ul,
	ul ol {
		margin-bottom: 0;
	}

	blockquote {
		margin: 0 0 1rem;
	}

	b,
	strong {
		font-weight: ${theme.fontWeightBold}; 
	}

	small {
		font-size: ${theme.fontSizeSm}
	}
`;
