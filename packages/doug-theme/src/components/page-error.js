import { styled, connect } from "frontity";
import Container from "./subcomponents/container"

const error404 = () => (
	<>
		<StyledContainer>
			<h1>Oops!</h1>
			<h5>This page can't be found.</h5>
		</StyledContainer>
	</>
);

export default connect(error404);

const StyledContainer = styled(Container)`
	padding-top: 3rem;
	padding-bottom: 3rem;
	text-align: left;
	max-width: 1000px;
`;
