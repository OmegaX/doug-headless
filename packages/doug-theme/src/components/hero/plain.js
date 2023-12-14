import React from "react"
import Container from '../subcomponents/container';
import { connect, styled, css } from "frontity"

const theme = {}

const Plain = ({ state, post }) => {

	let plain = {};

	if ( post && post.acf && post.acf.plain ) {
		plain = post.acf.plain;
	}
	
	const heading = plain.heading ? plain.heading : (post && post.title ? post.title.rendered : "");
	const subheading = plain.subheading ? plain.subheading : "";
	
	return (
		<Hero>
			<StyledContainer>
				{heading &&
					<Heading>{heading}</Heading>
				}
				{subheading &&
					<Subheading>{subheading}</Subheading>
				}
			</StyledContainer>
		</Hero>
	)
}

export default connect(Plain)

const Hero = styled.div`
	background-image: linear-gradient(to bottom right, ${theme.black}, ${theme.blue});
`;

const StyledContainer = styled(Container)`
	text-align: center;
	padding: 3rem 0;
	color: ${theme.white};
`;

const Heading = styled.h1`
	margin: 0;
`;

const Subheading = styled.h4`
	margin: 1.5rem 0 0 0;
`;
