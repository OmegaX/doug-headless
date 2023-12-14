import { styled, connect } from "frontity"

const theme = {}

const Component = ({ onClick, content }) => (
	<Button onClick={onClick}>
		{content}
	</Button>
);

export default connect(Component) 

const Button = styled.button`
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
	border-style: none;

	&:visited {
		color: ${theme.white};
	}

	&:hover {
		background-color: ${theme.lOrange};
		color: ${theme.white};
	}

	&:focus {
			outline: none;
	}
`;
