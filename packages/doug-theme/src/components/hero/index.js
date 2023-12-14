import React from "react"
import { connect } from "frontity"
import Plain from "./plain"
import Parallax from "./parallax"
import Switch from "@frontity/components/switch"

const Hero = ({ state }) => {
	const data = state.source.get(state.router.link)

	if ( data.isPortfolioArchive ) {
		return (
			<Parallax />
		)
	} else if ( data.isPage || data.isPortfolio ) {
		const post = state.source[data.type][data.id]
		let hero_type = "plain";

		if ( post && post.acf && post.acf.hero_type) {
			hero_type = post.acf.hero_type;
		}

		return (
			<Switch>
				<Plain post={post} when={hero_type === "plain"} />
				<Parallax when={hero_type === "parallax"} />
			</Switch> 
		)
	} else {
		return (
			<Plain />
		)
	}
}

export default connect(Hero)
