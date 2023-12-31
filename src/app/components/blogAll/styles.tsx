import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  gap: 30px;
  padding-top: 120px;
  padding-bottom: 60px;
  flex-wrap: wrap;
  @media (max-width: 449px) {
    padding: 60px 0 30px;
  }
`;

export { Content };
