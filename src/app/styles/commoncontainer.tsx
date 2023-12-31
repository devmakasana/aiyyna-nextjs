import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 0 72px;
  @media (max-width: 991px) {
    padding: 0 24px;
    max-width: 1326px;
  }
`;

export { Container };
