import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeadingWrapper = styled(Container)`
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

export const Heading = styled.h2`
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
