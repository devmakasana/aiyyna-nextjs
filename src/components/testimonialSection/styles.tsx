import styled from 'styled-components';

const Main = styled.div`
  background: #fff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 120px;
`;
const Heading = styled.div`
  color: #635bff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const Subheading = styled.div`
  color: #1c132d;
  text-align: center;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 15px;
  @media (max-width: 991px) {
    font-size: 34px;
    line-height: 44px;
  }
  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

export { Main, Content, Heading, Subheading };
