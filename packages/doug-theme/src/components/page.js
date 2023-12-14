import React from "react"
import { connect, styled } from "frontity"
import Welcome from "./acf-layouts/welcome"
import FAQ from "./acf-layouts/faq"
import Container from "./subcomponents/container"

const Page = ({ state }) => {
	const data = state.source.get(state.router.link)
	const post = state.source[data.type][data.id]
	const blocks = post.acf.layouts

	if ( blocks ) {
		return (
			<>
				{blocks.map((block, index) => {
					if (block.acf_fc_layout === "faq")
						return <FAQ key={index} data={block} />
					else if (block.acf_fc_layout === "welcome")
						return <Welcome key={index} data={block} />
					else
						return <p key={index}></p>
				})}
			</>
		)
	} else {
		return (
			<>
				<StyledContainer>
					<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
				</StyledContainer>
			</>        
		)
	}
}

export default connect(Page)

const StyledContainer = styled(Container)`
	padding-top: 3rem;
	padding-bottom: 3rem;
	text-align: left;
	max-width: 1000px;
`;
