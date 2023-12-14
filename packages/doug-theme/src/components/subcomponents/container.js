import { styled, connect } from "frontity";

const theme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!../sass/variables.scss');

const Component = ({ children }) => {
	return (
		<Container>
			{children}
		</Container>
	)
};

const Container = styled.div`
	width: 100%;
	max-width: ${theme.containerMaxWidth};
	margin-right: auto;
	margin-left: auto;
	padding-right: ${theme.spacer};
	padding-left: ${theme.spacer};

	@media only screen and (min-width: ${theme.gridBreakpoints.md}) {
		padding-right: 2rem;
		padding-left: 2rem;
	}
`;

export default connect(Container) 