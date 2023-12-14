import React from "react"
import { Global, connect, styled, css } from "frontity"
import Image from "@frontity/components/image"
import Link from "@frontity/components/link"
import Sticky from 'react-sticky-el'
import Container from './subcomponents/container'
import NavItem from './subcomponents/nav-item'
import NavContact from './subcomponents/contact'

const theme = {};

const MainNav = ({ state }) => {
	const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
	const acf = state.source.get("acf-options-page").acf;

	return (
		<>
			<Global styles={globalStyles} />
			<NavBG>
				<Relative>
					<Sticky topOffset={0}>
						<Nav>
							<StyledContainer>
								<NavBar>
									<Link link="/" title="Return to home page" rel="home">
										<Mugshot className="mugshot">
											<Image src={acf.mugshot.url} alt={acf.mugshot.alt} />
										</Mugshot>
									</Link>
									<List>
										{items.map((item, index) => {
											return <NavItem key={index} href={item.url} content={item.title} />
										})}
										<NavContact />
									</List>
								</NavBar>
							</StyledContainer>
						</Nav>
					</Sticky>
				</Relative>
			</NavBG>
		</>
	)
};

export default connect(MainNav)

const globalStyles = css`

	.sticky {
		z-index: 2;
		background-color: ${theme.black};

		nav {
			height: ${theme.navHeightSm};
		}

		.mugshot {
			opacity: 0;
		}
	}
`;

const NavBG = styled.div`
	background-color: ${theme.black};
`;

const Relative = styled.div`
	position: relative;
	z-index: 3;
`;

const Nav = styled.nav`
	height: ${theme.navHeightLg};
	color: ${theme.white};
	transition: .3s height ease-in-out;
`;

const StyledContainer = styled(Container)`
	height: 100%;
	position: relative;
`;

const Mugshot = styled.div`
	display: none;

	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		display: block;
		opacity: 1;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 180px;
		cursor: pointer;
		transition: .3s opacity ease-in-out;
	}
`;

const NavBar = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	flex-flow: row nowrap;
	justify-content: center;

	@media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
		justify-content: flex-end;
	}
`;

const List = styled.ul`
	display: flex;
	flex-flow: row wrap;
	padding: 0;
	margin: 0;
	list-style: none;
`;
