import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Container from './subcomponents/container';
import SVGVancouver from './svgs/vancouver-skyline';
import SVGQuote from './svgs/quote';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
const theme = {};

const Component = ({ state, libraries }) => {
	const options = state.source.get("acf-options-page").acf;
	const socials = options.social_media;
	const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
	const date = new Date();
	const year = date.getFullYear();

	return (
		<>
		<Footer>
			<Upper>
				<UpperBG><SVGVancouver /></UpperBG>
				<Container>
					<UpperRow>
						<UpperColLeft>
							<h5>Hit me up!</h5>
							<List>
								<Item key={"1"}>
									<RelativeLink link={"tel:" + options.contact_info.phone_number}>
										<Icon icon={faPhone} />
										{options.contact_info.phone_number}
									</RelativeLink>
								</Item>
								<Item key={"2"}>
									<RelativeLink link={"mailto:" + options.contact_info.email_address}>
										<Icon icon={faEnvelope} />
										{options.contact_info.email_address}
									</RelativeLink>
								</Item>
							</List>
						</UpperColLeft>
						<UpperColCenter>
							<h5>Stalk me online!</h5>
							<List>
								{options.social_media.map((social, index) => {
									return (
										<SocialItem key={index}>
											<SocialLink
												href={social.page_url.url}
												title={social.page_url.title}
												target="_blank"
												rel="noopener">
												<span dangerouslySetInnerHTML={{ __html: social.svg }} />
											</SocialLink>
										</SocialItem>
									)
								})}
							</List>
						</UpperColCenter>
						<UpperColRight>
							<BlockQuote>
								<SVGQuote />
								<span dangerouslySetInnerHTML={{ __html: options.footer_quote }} />
							</BlockQuote>
						</UpperColRight>
					</UpperRow>
				</Container>
			</Upper>
		
			<Lower>
				<LowerBG><SVGVancouver /></LowerBG>
				<Container>
					<LowerRow>
						<LowerColLeft>
							<StyledLink link='/privacy-policy/'>Privacy Policy</StyledLink>
							<Copyright>&copy; {year} {options.copyright}</Copyright>
						</LowerColLeft>
						<LowerColRight>
							<StyledLink link="/" title="Return to home page">Headless WordPress site by Doug Sabiston</StyledLink>
						</LowerColRight>
					</LowerRow>
				</Container>
			</Lower>
		</Footer>
		</>
	);
};

export default connect(Component);

const Footer = styled.footer`
	color: ${theme.white};
	background-color: ${theme.dBlue};
`;

const Upper = styled.div`
	position: relative;
	background-image: linear-gradient(to bottom right, ${theme.blue}, ${theme.black});
	padding: 4rem 0;

	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		padding: 6rem 0;
	}
`;

const UpperBG = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	overflow: hidden;

	svg {
		width: 100%;
		min-width: 1000px;
		height: auto;
		opacity: .15;
		fill: ${theme.white};
	}
`;

const UpperRow = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 3rem;
	position: relative;
	z-index: 3;

	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const UpperColLeft = styled.div`
	display: grid;
	justify-content: center;
	text-align: center;

	h4, h5, h6 {
		margin-bottom: 1rem;
	}

	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		text-align: left;
		justify-content: left;
		align-items: center;
	}
`;

const UpperColCenter = styled.div`
	display: grid;
	justify-content: center;
	text-align: center;

	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		align-items: center;
	}
`;

const UpperColRight = styled.div`
	display: grid;
	justify-content: center;
	text-align: center;

	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		justify-content: flex-end;
		align-items: center;
	}
`;

const List = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	color: ${theme.white};
`;

const Item = styled.li`

	&:not(:last-child) {
		margin-bottom: .75rem;
	}
`;

const SocialItem = styled(Item)`
	display: inline-block;
	padding: 0 1rem;
	margin: 0;

	svg {
		width: 2rem;
		height: 2rem;
		fill: ${theme.orange};
		transition: ${theme.transitionBase};
	}
`;

const BlockQuote = styled.blockquote`
	position: relative;
	padding-left: 2.5rem;
	margin: 0;

	svg {
		position: absolute;
		top: -.75rem;
		left: 0;
		width: 2rem;
		height: 2rem;
		fill: ${theme.orange};
	}
`;

const Lower = styled.div`
	background-image: linear-gradient(to bottom right, ${theme.dBlue}, ${theme.black});
	position: relative;
	overflow: hidden;
	padding: 2rem 0;

	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		padding: 4rem 0;
	}
`;

const LowerBG = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1;
	overflow: hidden;
	display: flex;
	align-items: flex-start;
	justify-content: center;

	svg {
		width: 100%;
		min-width: 1000px;
		height: auto;
		max-height: 140px;
		opacity: .05;
		fill: ${theme.white};
		transform: scale(1, -1);
	}
`;

const LowerRow = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 2rem;
	z-index: 1;
	position: relative;
	z-index: 3;

	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		font-size: ${theme.fontSizeXs};
	}
`;

const LowerColLeft = styled.div`
	text-align: center;

	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		text-align: left;
	}
`;

const LowerColRight = styled.div`
	text-align: center;

	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		text-align: right;
	}
`;

const Title = styled.h2`
	margin: 0;
	margin-bottom: 16px;
`;

const Description = styled.h4`
	margin: 0;
	color: rgba(255, 255, 255, 0.7);
`;

const Copyright = styled.p`
	margin-top: .75rem;
	margin-bottom: 0;
`;

const SocialLink = styled.a`

	svg {
		fill: ${theme.orange};
		transition: ${theme.transitionBase};
	}

	&:hover,
	&:focus {

		svg {
			fill: ${theme.lOrange};
			transform: scale(1.05);
		}
	}  
`;

const StyledLink = styled(Link)`
	transition: ${theme.transitionBase};
	color: ${theme.white};

	&:hover,
	&:focus {
		color: ${theme.white};
		text-shadow: .5px .5px 3px ${theme.white};
	}  
`;

const RelativeLink = styled(StyledLink)`
	position: relative;
	padding-left: 1.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
	position: absolute;
	left: 0;
	top: 2px;
	height: 1rem;
	width: 1rem;
`;