import styled from 'styled-components';

const Main = styled.div`
  background-image: url('footercta-background.svg');
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 100%;
`;

const Content = styled.div`
  padding-top: 105px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  position: relative;
`;

const Description = styled.div`
  color: #1c132d;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  max-width: 800px;
  width: 100%;
`;
export { Main, Content, Description };
