import Link from "@frontity/components/link";
import { styled, connect } from "frontity"

const theme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!../sass/variables.scss');

const NavItem = ({ href, onClick, content }) => {

	let component;

	if (onClick) {
		component = <StyledButton onClick={onClick} dangerouslySetInnerHTML={{ __html: content }} />;
	} else {
		component = <StyledLink link={href} dangerouslySetInnerHTML={{ __html: content }} />;
	}

	return (
		<Item itemscope="itemscope" itemtype="https://www.schema.org/SiteNavigationElement">
				{component}        
		</Item>
	)
}

export default connect(NavItem)

const linkStyles = `
	display: block;
	padding: ${theme.navLinkPaddingY} ${theme.navLinkPaddingX};
	color: ${theme.white};
	font-size: ${theme.fontSizeLg};
	transition: ${theme.transitionBase};
	background: transparent;
	border-style: none;

	&:hover {
		color: ${theme.white};
		text-shadow: 1px 1px 6px ${theme.white};
	}

	&:visited {
		color: ${theme.white};
	}

	&:focus {
		outline: none;
	}
`

const Item = styled.li`
	 margin-left: 1rem;
`;

const StyledButton = styled.button`
	${linkStyles}
`;

const StyledLink = styled(Link)`
	${linkStyles}
`;


