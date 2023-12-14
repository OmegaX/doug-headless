import React from "react"
import { connect, styled } from "frontity"
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import NavItem from './nav-item'
import Container from './container'

const theme = {}

Modal.setAppElement('#root')

const Component = ({ state, actions, libraries }) => {
	const Html2React = libraries.html2react.Component;
	const data = state.source.get("/contact");
	const contactForm = state.source.page[data.id];

	return (
		<>
			<NavItem onClick={actions.theme.openContactModal} content="Contact" />
			<StyledModal
				isOpen={state.theme.isContactModalOpen}
				onRequestClose={actions.theme.closeContactModal}
				contentLabel="Contact Modal"
				shouldCloseOnOverlayClick={true}
				>
					<ModalContent>
						<ModalHeader>
							<Heading>Contact Me</Heading>
							<IconLink onClick={actions.theme.closeContactModal}><Icon icon={faWindowClose} /></IconLink>
						</ModalHeader>
						<ModalBody>
							<Html2React html={contactForm.content.rendered} />
						</ModalBody>
					</ModalContent>
			</StyledModal>
		</>
	)
};

export default connect(Component)

const overlayStyles = {
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	zIndex: '999',
	overflow: 'auto',
	display: 'flex',
	backdropFilter: 'blur(10px)'
}

Object.assign(Modal.defaultStyles.overlay, { ...overlayStyles });

const StyledModal = styled(Modal)`
	width: 100%;
	height: auto;
	margin: auto;
	max-width: 500px;

	&:focus {
		outline: 0;
	}
`;

const ModalContent = styled.div`
	margin: ${theme.spacer};
	background-color: ${theme.white};
`;

const ModalHeader = styled.div`
	background-color: ${theme.blue};
	color: ${theme.white};
	text-align: center;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;

	@media only screen and (min-width: ${theme.gridBreakpoints.md}) {
		padding: 1rem 1.5rem;
	}
`;

const Heading = styled.h3`
	margin: 0;
`;

const Icon = styled(FontAwesomeIcon)`
	color: ${theme.white};
	font-size: 1.5rem;
`;

const IconLink = styled.a`
	display: flex;
	padding: .15rem;
	cursor: pointer;
	transform: ${theme.transformBase};
	align-items: center;

	&:hover {
		transform: scale(1.05);
	}
`;

const ModalBody = styled.div`
	padding: 1rem;

	@media only screen and (min-width: ${theme.gridBreakpoints.md}) {
		padding: 1.5rem;
	}
`;

const Link = styled.a`
	display: block;
	padding: ${theme.navLinkPaddingY} ${theme.navLinkPaddingX};
	cursor: pointer;
	transform: ${theme.transformBase};

	&:hover {
		text-shadow: .5px .5px 3px ${theme.white};
	}
`;
