import React from 'react';
import styled from 'styled-components';
import { Container } from '../Common/Utility';

const Nav = styled.nav`
  padding: 2rem 0;
  ul {
    display: flex;
    align-items: center;
    width: 40%;
  }
  img {
    max-width: 190px;
  }
  li {
    margin-right: 2rem;
    :last-child {
      margin-right: 0;
    }

    a {
      font-family: 'Playfair Display', sans-serif;
      font-style: italic;
    }
  }
`;

const Left = styled.ul`
  justify-content: flex-start;
`;

const Right = styled.ul`
  justify-content: flex-end;

  li:not(:last-child) {
    border-radius: 50%;
    margin-right: 1rem;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #dcc298;
    svg {
      fill: #dcc298;
    }
  }
  svg {
    height: 15px;
    width: 15px;
  }

  li:last-child {
    margin-left: 3rem;
  }
  button {
    background: #000;
    color: white;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 5px;
      fill: white;
    }
  }
`;

export default function NavBar() {
  return (
    <Nav>
      <Container>
        <Left>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Gallery</a>
          </li>
          <li>
            <a href='/'>Category</a>
          </li>
          <li>
            <a href='/'>Pages</a>
          </li>
        </Left>

        <img src='/assets/images/logo.png' alt='logo' />
        <Right>
          <li>
            <a href='/'>
              <svg>
                <use xlinkHref='/sprite.svg#icon-facebook' />
              </svg>
            </a>
          </li>

          <li>
            <a href='/'>
              <svg>
                <use xlinkHref='/sprite.svg#icon-twitter' />
              </svg>
            </a>
          </li>

          <li>
            <a href='/'>
              <svg>
                <use xlinkHref='/sprite.svg#icon-pinterest' />
              </svg>
            </a>
          </li>

          <li>
            <a href='/'>
              <svg>
                <use xlinkHref='/sprite.svg#icon-instagram' />
              </svg>
            </a>
          </li>
          <li>
            <button>
              RUPIAH
              <svg>
                <use xlinkHref='/sprite.svg#icon-keyboard_arrow_down' />
              </svg>
            </button>
          </li>
        </Right>
      </Container>
    </Nav>
  );
}
