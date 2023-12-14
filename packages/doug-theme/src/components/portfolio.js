import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link";
import Container from "./subcomponents/container"
import FeaturedMedia from "./subcomponents/featured-media"
import ButtonLink from "./subcomponents/button-link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapSigns } from '@fortawesome/free-solid-svg-icons'

const theme = {};

const Component = ({ state }) => {
	const data = state.source.get(state.router.link)
	const item = state.source[data.type][data.id]

	return (
		<Portfolio>
			<Container>
				<Content>
					<ImageWrap>
						<FeaturedMedia id={item.featured_media} />
					</ImageWrap>
					<h2>{item.acf.subheading}</h2>
					<div dangerouslySetInnerHTML={{ __html: item.acf.wysiwyg }} />
					<StyledButtonLink href={item.acf.site_link.url} target="_blank" rel="noopener">
						Visit {item.title.rendered}
					</StyledButtonLink>
				</Content>
				<PostNavigation>
					<Icon icon={faMapSigns} />
					<PrevLink link={'/portfolio/' + item.previous.slug} rel="prev">Previous</PrevLink>
					<NextLink link={'/portfolio/' + item.next.slug} rel="next">Next</NextLink>
				</PostNavigation>
			</Container>
		</Portfolio>
	)
}

export default connect(Component)

const Portfolio = styled.div`
	padding-bottom: 4rem;
`;

const ImageWrap = styled.div`
	margin-top: 3rem;
	margin-bottom: 2rem;
	height: 0;
	padding-top: 50%;
	width: 100%;
	position: relative;
	overflow: hidden;

	img {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	
	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		margin-top: -4rem;
		margin-bottom: 4rem;
	}
`;

const StyledMedia = styled(FeaturedMedia)`

`;

const Content = styled.div`
	text-align: center;
	font-size: ${theme.fontSizeLg};
	padding-bottom: 4rem;

	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		width: 80%;
		margin: 0 auto;
		max-width: 1000px;
	}
`;

const StyledButtonLink = styled(ButtonLink)`
	margin-top: 2rem;
`;

const PostNavigation = styled.nav`
	font-size: ${theme.fontSizeXl};
	color: ${theme.white};
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const Icon = styled(FontAwesomeIcon)`
	font-size: 14rem;
	color: ${theme.black};
`;

const Linky = styled(Link)`
	font-size: ${theme.fontSizeXl};
	text-transform: uppercase;
	color: ${theme.white};
	font-weight: ${theme.fontWeightBold};
	transition: ${theme.transitionBase};
	text-align: center;
	padding: 1rem;
	position: absolute;
	right: 0;
	bottom: auto;
	left: 0;

	&:visited {
		color: ${theme.white};
	}

	&:hover {
		color: ${theme.orange};
	}
`;

const PrevLink = styled(Linky)`
	top: 42.5%;
`;

const NextLink = styled(Linky)`
	top: 5%;
`;