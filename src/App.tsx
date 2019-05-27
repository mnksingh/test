import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './components/Header/Header';
import Banner from './components/Carousel/Banner';
import CtaBlock from './components/Sections/Cta';
import HandPickedBlock from './components/Sections/Handpicked';
import SummerCollectionBlock from './components/Sections/Summer-Collection';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: Lato, sans-serif;
    font-size: 1.6rem;
  }
  svg {
    height: 20px;
    width: 20px;
  }
  li {
    display: inline-block;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: currentColor;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Banner />
      <CtaBlock />
      <HandPickedBlock />
      <SummerCollectionBlock />
    </>
  );
};

export default App;
