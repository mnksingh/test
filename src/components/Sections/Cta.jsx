import React from "react"
import styled from "styled-components"

import { Container } from "../Common/Utility"

const CtaWrapper = styled(Container)`
  margin: 3rem auto;
  h3 {
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  svg {
    height: 40px;
    width: 40px;
    margin-right: 2rem;
    fill: white;
  }
  & > div {
    height: 100px;
    flex: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`

const Left = styled.div`
  padding-right: 50px;
  background: #d9be8f;
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

const Middle = styled.div`
  background: black;
  color: white;
  padding: 0 50px;

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

const Right = styled.div`
  background: #d9be8f;
  padding-left: 50px;

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
