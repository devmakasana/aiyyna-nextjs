import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 449px) {
    padding-bottom: 60px;
  }
`;
const Below = styled.div`
  text-align: center;
`;

export { Main, Below };
