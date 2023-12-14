import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import Fade from 'react-reveal/Fade';
import FeaturedMedia from "./subcomponents/featured-media"
import Container from "./subcomponents/container"

const theme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!./sass/variables.scss');

const Archive = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
        console.log(post.link);
        return (
          <Item key={item.id}>
            <Container>
                <Row className="row">
                  <ColImage>
                    <Link link={post.link}>
                      <Fade duration={1000}>
                      <FeaturedMedia id={post.featured_media} />
                      </Fade>
                    </Link>
                  </ColImage>
                  <ColText>
                    <Link link={post.link}>
                      <Fade duration={1400}>
                        <h4>{post.title.rendered}</h4>
                        <button className="btn">See More...</button>
                      </Fade>
                    </Link>
                  </ColText>
                </Row>
            </Container>
          </Item>
        )
      })}
    </>
  )
}

export default connect(Archive)

const Item = styled.div`
  padding: 4rem 0;
  
  &:nth-of-type(even) {
    background-color: ${theme.gray200};

    @media only screen and (min-width: ${theme.gridBreakpoints.lg}) {

      .row div:last-child {
        order: -1;
      }
    }
  } 
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  @media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  } 
`;

const ColImage = styled.div`

  @media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ColText = styled.div`
  padding: 2rem 0;
  text-align: center;

  @media only screen and (min-width: ${theme.gridBreakpoints.lg}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
// const Row = styled.div`

// `;
// const Row = styled.div`

// `;
// const Row = styled.div`

// `;}