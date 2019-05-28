import React from "react"
import styled from "styled-components"
import { Container, HeadingWrapper, Heading } from "../../Common/Utility"

const ContentWrapper = styled.div`
  position: relative;
  padding: 4rem 0;
  background: #d9be8f;

  ::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    border-left: 180px solid transparent;
    border-right: 180px solid transparent;
    border-top: 80px solid white;
    z-index: 1;
  }
`

const Left = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  p {
    color: white;
    max-width: 300px;
    font: italic 500 1.6rem/1.6 "Playfair Display", sans-serif;
  }
  div {
    margin-left: 1rem;
  }
  h3 {
    margin-top: 3rem;
    font: italic 700 3rem "Playfair Display", sans-serif;
  }
  h4 {
    color: #7f7d7e;
    margin: 1rem 0;
    text-transfrom: uppercase;
  }
`

const Right = styled(Left)`
  flex-direction: row-reverse;
  text-align: end;
`

export default function OurBrandSection() {
  return (
    <>
      <HeadingWrapper>
        <Heading>Customer Says</Heading>
      </HeadingWrapper>

      <ContentWrapper>
        <Container as="ul">
          <Left>
            <img src="assets/images/Testimonial1.png" alt="Sandra Dewi" />
            <div>
              <p>
                Sel ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
              <h3>Sandra Dewi</h3>
              <h4>Fashion stylish</h4>
            </div>
          </Left>
          <Right>
            <img src="assets/images/Testimonial2.png" alt="Shaheer Sheikh" />
            <div>
              <p>
                Sel ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
              <h3>Shaheer Sheikh</h3>
              <h4>Designer</h4>
            </div>
          </Right>
        </Container>
      </ContentWrapper>
    </>
  )
}
