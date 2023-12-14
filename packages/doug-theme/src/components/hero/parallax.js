import React from "react"
import { styled, connect, css} from "frontity"
import { Parallax } from 'react-parallax';
import ButtonLink from "../subcomponents/button-link";
import Container from '../subcomponents/container';

const theme = {};

const Component = ({ state }) => {
	const data = state.source.get(state.router.link);

	let content = {
		heading: "",
		subheading: "",
		height: "short",
		bg_img: "",
		link: []
	};

	let newContent;

	if ( data.isPortfolioArchive || data.isArchive) {
		const acf = state.source.get("acf-options-page").acf;
		newContent = {
			heading: acf.p_hero_heading ? acf.p_hero_heading : "Portfolio",
			subheading: acf.p_hero_subheading ? acf.p_hero_subheading : "Doug Sabiston",
			bg_img: acf.p_hero_img
		}
	} else if ( data.isPage || data.isPortfolio || data.isPost ) {
		const page = state.source[data.type][data.id]
		newContent= {
			heading: page.acf.parallax.heading,
			subheading: page.acf.parallax.subheading,
			height: page.acf.parallax.height,
			bg_img: page.acf.parallax.bg_img,
			link: page.acf.parallax.link,
		}
	}
	Object.assign(content, { ...newContent });

	return (
		<Hero height="{content.height}">
			<ImageBG blur={5} bgImage={content.bg_img} bgImageStyle={{height: '100%', objectFit: 'cover', objectPosition: 'center'}} bgImageAlt="Hand pointing to numbers" strength={200}>
			</ImageBG>
			<StyledContainer>
				<Content>
					{content.heading &&
						<Heading>{content.heading}</Heading>
					}
					{content.subheading &&
						<Subheading>{content.subheading}</Subheading>
					}
					{content.link.url &&
						<StyledButtonLink href={content.link.url}>
							{content.link.title}
						</StyledButtonLink>
					}
				</Content>
			</StyledContainer>
		</Hero>
	)
}

export default connect(Component)

const Hero = styled.div`
	position: relative;
	background-color: ${theme.black};
	height: ${props => props.height = "tall" ? "calc(100vh - (88px + 32px))" : "auto"};
	min-height: ${props => props.height = "tall" ? "300px" : "200px"};
	max-height: ${props => props.height = "tall" ? "600px" : "500px"};
`;

const StyledContainer = styled(Container)`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Content = styled.div`
	color: ${theme.white};
	text-align: center;
`;

const ImageBG = styled(Parallax)`
	height: 100%;
`;

const Heading = styled.h1`
	color: ${theme.white};
	margin: 0;
`;

const Subheading = styled.h3`
	color: ${theme.white};
	margin: 1.5rem 0 0 0;
`;

const StyledButtonLink = styled(ButtonLink)`
	margin: 1.75rem 0 0 0;
`;
