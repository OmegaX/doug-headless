import Link from "@frontity/components/link";
import { styled, connect } from "frontity"

const theme = {}

const ButtonLink = ({ href, className, children, target, rel }) => (
	<StyledLink link={href} className={className} target={target} rel={rel}>
		{children}
	</StyledLink>
);

export default connect(ButtonLink) 

const StyledLink = styled(Link)`
	display: inline-block;
	font-family: ${theme.btnFontFamily};
	font-weight: ${theme.btnFontWeight};
	color: ${theme.white};
	text-align: center;
	vertical-align: middle;
	user-select: none;
	background-color: ${theme.orange};
	border: ${theme.borderWidth} solid ${theme.orange};
	padding: ${theme.btnPaddingY} ${theme.btnPaddingX};
	font-size: ${theme.btnFontSize};
	line-height: ${theme.btnLineHeight};
	border-radius: ${theme.borderRadius};
	transition: ${theme.btnTransition};
	cursor: pointer;

	&:visited {
	  color: ${theme.white};
	}

	&:hover,
	&:focus {
	  background-color: ${theme.lOrange};
	  color: ${theme.white};
	}
`;
