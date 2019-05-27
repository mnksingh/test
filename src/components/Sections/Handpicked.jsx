import React from 'react';
import styled from 'styled-components';
import { Container } from '../Common/Utility';

const HeadingWrapper = styled(Container)`
  justify-content: center;
  margin-bottom: 3rem;
  ::before,
  ::after {
    content: '';
    height: 2px;
    background: #ccc;
    display: block;
    flex: 1 1 auto;
  }
`;

const Heading = styled.h2`
  padding: 0 5%;
  font-size: 30px;
  font-style: italic;
  font-weight: 700;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ::before,
  ::after {
    content: '';
    background: #dabe8f;
    height: 15px;
    width: 15px;
    display: inline-block;
    transform: rotate(150deg);
  }
`;

const ContentWrapper = styled(Container)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-rows: auto auto;
  img {
    max-width: 100%;
  }
  div:nth-child(1) {
    grid-row: 1;
    grid-column: 1;
  }
  div:nth-child(2) {
    grid-row: 2;
    grid-column: 2;
  }
  div:nth-child(3) {
    grid-row: 3;
    grid-column: 3;
  }
  div:nth-child(4) {
    grid-row: 2;
    grid-column: 2;
  }
  div:nth-child(5) {
    grid-row: 2;
    grid-column: 3;
  }
`;

const Item = styled.div`
  position: relative;
  ::before {
    content: '';
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    border: 1px solid white;
  }
`;

export default function Handpicked() {
  return (
    <>
      <HeadingWrapper>
        <Heading>Handpicked</Heading>
      </HeadingWrapper>
      <ContentWrapper>
        <Item>
          <img src='/assets/images/Handpicked-1.jpg' />
        </Item>
        <Item>
          <img src='/assets/images/Handpicked-3.jpg' />
        </Item>
        <Item>
          <img src='/assets/images/Handpicked-4.jpg' />
        </Item>
        <Item>
          <img src='/assets/images/Handpicked-2.jpg' />
        </Item>
        <Item>
          <img src='/assets/images/Handpicked-5.jpg' />
        </Item>
      </ContentWrapper>
    </>
  );
}
