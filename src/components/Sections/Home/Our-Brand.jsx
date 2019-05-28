import React from "react"
import styled from "styled-components"
import { Container, HeadingWrapper, Heading } from "../../Common/Utility"

const ContentWrapper = styled(Container)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: 100px;
  padding: 1rem;
  grid-gap: 1rem;
`

const brand_images = [
  "Brand-1.png",
  "Brand-2.png",
  "Brand-3.png",
  "Brand-4.png",
  "Brand-5.png",
  "Brand-6.png"
]

const Item = styled.div`
  text-align: center;
  transition: all 0.3s;
  img {
    max-width: 100%;
  }
  :hover {
    transform: scale(1.1);
  }
`

export default function OurBrandSection() {
  const brand_list = brand_images.map(img => (
    <Item as="li" key={img}>
      <img src={`assets/images/${img}`} alt={img} />
    </Item>
  ))
  return (
    <>
      <HeadingWrapper>
        <Heading>Our Brand</Heading>
      </HeadingWrapper>
      <ContentWrapper as="ul">{brand_list}</ContentWrapper>
    </>
  )
}
