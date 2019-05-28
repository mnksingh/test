import React from "react"
import styled from "styled-components"

import { Container } from "../../Common/Utility"

const CtaWrapper = styled(Container)`
  margin: 3rem auto;
  h3 {
    text-transform: uppercase;
    font-size: 2.5rem;
  }
  svg {
    height: 40px;
    width: 40px;
    margin-right: 2rem;
    fill: white;
  }
  p {
    font-size: 1.4rem;
  }
`

const defaultBlock = styled.div`
  height: 100px;
  flex: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  color: white;
`

const Left = styled(defaultBlock)`
  padding-left: 30px;
  background: #d9be8f;
  justify-content: flex-start;
  svg {
    transform: rotate(90deg);
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border: 50px solid;
    border-right: 25px solid;
    border-left: 25px solid;
    border-color: white white white transparent;
  }
`

const Middle = styled(defaultBlock)`
  background: black;
  padding: 0 50px;
  justify-content: center;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border: 50px solid;
    border-right: 25px solid;
    border-left: 25px solid;
    border-color: transparent transparent transparent white;
  }

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border: 50px solid;
    border-right: 25px solid;
    border-left: 25px solid;
    border-color: transparent white transparent transparent;
  }
`

const Right = styled(defaultBlock)`
  background: #d9be8f;
  padding-left: 80px;
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border: 50px solid;
    border-right: 25px solid;
    border-left: 25px solid;
    border-color: white transparent white white;
  }
`

export default function Cta() {
  return (
    <CtaWrapper>
      <Left>
        <svg>
          <use xlinkHref="/sprite.svg#icon-airplane" />
        </svg>
        <div>
          <h3>Free Shipping</h3>
          <p>In order Min $200</p>
        </div>
      </Left>
      <Middle>
        <svg>
          <use xlinkHref="/sprite.svg#icon-clock-o" />
        </svg>
        <div>
          <h3>30-Days Return</h3>
          <p>Money Back Guarantee</p>
        </div>
      </Middle>
      <Right>
        <svg>
          <use xlinkHref="/sprite.svg#icon-lifebuoy" />
        </svg>
        <div>
          <h3>24/7 Support</h3>
          <p>Lifetime support</p>
        </div>
      </Right>
    </CtaWrapper>
  )
}
