import React from "react"
import { connect, styled, css } from "frontity"
import Container from "../subcomponents/container"
import Button from "../subcomponents/button"

const theme = {};

const Component = ({ state, actions, data }) => {

	return (
		<Welcome>
			<GraphicBG css={css`background-image: url(${data.bg_image})`}></GraphicBG>
			<Container>
				<Content>
					<Heading>{data.heading}</Heading>
					<div dangerouslySetInnerHTML={{ __html: data.content }} />
					<Button onClick={actions.theme.openContactModal} content="Contact" />
				</Content>
			</Container>	
		</Welcome>
	)
}

export default connect(Component)

const Welcome = styled.div`
	position: relative;
	padding: 3rem 0;

	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		padding: 6rem 0;
	}
`;

const GraphicBG = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-size: cover;
	background-position: 30% bottom;
	opacity: .075;
	margin-top: 3rem;
	z-index: -1;
`;

const Content = styled.div`
	text-align: center;
	font-size: ${theme.fontSizeLg};

	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		font-size: ${theme.fontSizeXl};
		width: 60%;
		margin: 0 auto;
		max-width: 1000px;
	}
`;

const Heading = styled.h3`
	position: relative;
	margin-bottom: 4rem;

	&:after {
		position: absolute;
		top: auto;
		right: auto;
		bottom: -2rem; 
		left: calc(50% - 50px);
		content: '';
		background-color: ${theme.black};
		width: 100px;
		height: .5rem;
	}
`;