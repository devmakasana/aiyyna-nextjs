import { styled } from 'styled-components';

const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding-bottom: 50px;
  @media (max-width: 449px) {
    padding-bottom: 60px;
  }
`;

export { Content };
