import { colors } from '@/app/styles/colors';
import { Body1, Heading1, Heading5 } from '@/app/styles/fontstyle';
import styled from 'styled-components';
const Main = styled.div`
  width: 100%;
  height: auto;
  max-width: 900px;
  background-color: rgba(0, 0, 0, 0);
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-bottom: 4px;
`;
const Content = styled.div`
  border-radius: 12px;
  border: 1px solid #dfe5f1 !important;
  padding: 40px;
  text-align: left;
  z-index: 2;
  height: 100%;
  max-height: 100%;
  background-color: #fff;
  position: relative;
  margin-right: -1px;
  margin-left: -1px;

  @media (max-width: 991px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
const Sliderbox = styled.div``;
const Line = styled.div`
  background-image: linear-gradient(to right, #635bff, #5ba2ff 56.77%, #5bddff);
  border-radius: 14px;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  overflow: hidden;
`;
const Logo = styled.div`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;
const Description = styled.p`
  margin-top: 10px;
  color: ${colors.title};
  ${Body1}
`;
const Title = styled.div`
  color: ${colors.title};
  ${Heading5}
  margin-top: 24px;
`;
const Heading = styled.div`
  color: ${colors.body};
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 6px;
`;
const Subheading = styled.div`
  color: ${colors.body};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 6px;
`;

export { Sliderbox, Logo, Description, Title, Heading, Subheading, Main, Line, Content };
