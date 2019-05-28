import React from "react"
import styled from "styled-components"
import { Container, HeadingWrapper, Heading } from "../../Common/Utility"

const ContentWrapper = styled(Container)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 400px;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    transition: all 0.3s;
  }
  li {
    :nth-child(2) {
      grid-column: 2;
      grid-row: 1/3;
    }
  }
`

const Item = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  :hover {
    img {
      transform: scale(1.1);
    }
    ::before {
      opacity: 0;
    }
  }

  ::before {
    content: "";
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    border: 2px solid white;
    z-index: 2;
    transition: all 0.3s;
  }
`

const handpicked_images = [
  "Handpicked-1.jpg",
  "Handpicked-3.jpg",
  "Handpicked-4.jpg",
  "Handpicked-2.jpg",
  "Handpicked-5.jpg"
]

export default function Handpicked() {
  const handpicked_images_list = handpicked_images.map(img => (
    <Item as="li" key={img}>
      <img src={`assets/images/${img}`} alt={img} />
    </Item>
  ))

  return (
    <>
      <HeadingWrapper>
        <Heading>Handpicked</Heading>
      </HeadingWrapper>
      <ContentWrapper as="ul">{handpicked_images_list}</ContentWrapper>
    </>
  )
}
