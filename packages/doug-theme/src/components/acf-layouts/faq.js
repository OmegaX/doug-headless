import React from "react"
import { connect, styled, css } from "frontity"
import Container from "../subcomponents/container"

const theme = {}

const Component = ({ state, data }) => {

	return (
		<FAQ>
			<Container>
				<Content>
					<div dangerouslySetInnerHTML={{ __html: data.editor }} />
				</Content>
			</Container>
		</FAQ>
	)
}

export default connect(Component)

const FAQ = styled.div`
	position: relative;
	padding: 3rem 0;

	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		padding: 6rem 0;
	}
`;

const Content = styled.div`
	text-align: center;
	font-size: ${theme.fontSizeLg};

	h3 {
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
	}

	.btn {
		margin-top: 1rem;
	}

	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		font-size: ${theme.fontSizeXl};
		width: 60%;
		margin: 0 auto;
		max-width: 1000px;
	}
`;
