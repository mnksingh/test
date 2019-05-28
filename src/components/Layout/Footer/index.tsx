import React from "react"
import { Container as defaultContainer } from "../../Common/Utility"
import styled from "styled-components"

const Container = styled(defaultContainer)`
  align-items: flex-start;
`

const Footer = styled.footer`
  background: #141414;
  padding: 5rem 0;
`

const Left = styled.ul`
  display: flex;
  width: 70%;
  justify-content: space-betweem;
  align-items: flex-start;
`
const Heading = styled.h4`
  font-size: 1.6rem;
  text-transform: uppercase;
  color: white;
  font-weight: 700;
  margin-bottom: 3rem;
`

const LeftColunn = styled.li`
  width: 30%;
`

const LeftItemContainer = styled.ul``

const LeftItem = styled.li`
  display: block;
  color: #656565;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const Right = styled.div`
  display: flex;
  height: 100%;
  width: 30%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  li {
    border-radius: 50%;
    margin-right: 1rem;
    height: 40px;
    width: 40px;
    background: white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    fill: #323031;
    display: block;
  }
  h5 {
    margin: 3rem 0;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
  }
  i {
    text-transform: lowercase;
  }
`

const FormGroup = styled.div`
  padding: 3px;
  border: 1px solid #323031;
  width: 80%;
  display: flex;

  input {
    flex: 1;
    border: 1px solid #323031;
    padding: 1rem;
    background: transparent;
    :focus {
      color: white;
      outline: 0;
    }
  }
  button {
    cursor: pointer;
    border: 0;
    color: white;
    padding: 5px 10px;
    font-weight: bold;
    background: #323031;
  }
`

export default function FooterBlock() {
  const leftList = footer_items.map(item => (
    <LeftColunn key={item.heading}>
      <Heading>{item.heading}</Heading>
      <LeftItemContainer>
        {item.items.map(item => (
          <LeftItem key={item}>{item}</LeftItem>
        ))}
      </LeftItemContainer>
    </LeftColunn>
  ))

  const social_icons_list = social_icons.map(icon => (
    <li key={icon}>
      <a href="/">
        <svg>
          <use xlinkHref={`/sprite.svg#${icon}`} />
        </svg>
      </a>
    </li>
  ))

  return (
    <Footer>
      <Container>
        <Left>{leftList}</Left>
        <Right>
          <Heading>Stay Connected</Heading>
          <ul>{social_icons_list}</ul>
          <h5>
            Subscribe <i>in</i> our News Letter
          </h5>
          <FormGroup>
            <input placeholder="Enter your email address" type="text" />
            <button>Subscribe</button>
          </FormGroup>
        </Right>
      </Container>
    </Footer>
  )
}

const social_icons = [
  "icon-facebook",
  "icon-twitter",
  "icon-pinterest",
  "icon-instagram",
  "icon-connection"
]

const footer_items = [
  {
    heading: "Shops",
    items: [
      "New in",
      "Women",
      "Men",
      "Shoes",
      "Bags & Accessories",
      "Top Brands",
      "Sale & Special Offers",
      "Lookbook"
    ]
  },
  {
    heading: "Information",
    items: [
      "About us",
      "Customer Service",
      "New Collection",
      "Best Sellers",
      "Manufacturers",
      "Privacy policy",
      "Terms & condition",
      "Blog"
    ]
  },
  {
    heading: "Customer Service  ",
    items: [
      "Search Terms",
      "Advanced Search",
      "Orders and returns",
      "Contact Us",
      "RSS",
      "Help & FAQ's",
      "Consultant",
      "Store Locations"
    ]
  }
]
