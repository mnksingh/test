import React from 'react';
import { Container } from '../Common/Utility';
import styled from 'styled-components';

const InfoToolbarWrapper = styled.div`
  background: #f2f2f2;
`;

const InfoToolbarContainer = styled(Container)`
  padding: 10px 0;
  font-size: 14px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 1.5rem;
    fill: #666666;
    height: 14px;
    width: 14px;
  }
`;
const Right = styled.div`
  li {
    margin-right: 3rem;
    position: relative;
    ::after {
      content: '';
      position: absolute;
      right: -1.5rem;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 1px;
      height: 14px;
      background: black;
    }

    :last-child {
      margin-right: 0;
      ::after {
        display: none;
      }
    }
  }
`;

export default function InfoToolbar() {
  return (
    <InfoToolbarWrapper>
      <InfoToolbarContainer>
        <Left>
          <svg>
            <use xlinkHref='/sprite.svg#icon-phone' />
          </svg>
          <span>Call +001 555 801</span>
        </Left>
        <Right>
          <li>
            <a href='/'>Welcome Msg!</a>
          </li>
          <li>
            <a href='/'>My Account</a>
          </li>
          <li>
            <a href='/'>My Whitelist </a>
          </li>
          <li>
            <a href='/'>Login</a>
          </li>
        </Right>
      </InfoToolbarContainer>
    </InfoToolbarWrapper>
  );
}
