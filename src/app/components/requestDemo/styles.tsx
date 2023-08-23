import { Body1, Heading1 } from '@/app/styles/fontstyle';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 80px;
  padding-bottom: 42px;
  position: relative;
  z-index: 1;
`;
const Main = styled.div`
  .image-hero {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }
  .image-purple {
    width: 100%;
    max-width: 546px;
    filter: blur(105px);
    background: linear-gradient(207deg, #efe3ff 0%, #cac6ff 100%);
    position: absolute;
    top: 31%;
    bottom: auto;
    left: 18%;
    right: auto;
  }
  .image-pink {
    background: #c0c0fe;
    filter: blur(120px);
    width: 100%;
    max-width: 367px;
    position: absolute;
    top: auto;
    bottom: 24%;
    left: auto;
    right: 19%;
  }
  .image-blue {
    background: #b6dfff;
    filter: blur(160px);
    width: 100%;
    max-width: 367px;
    position: absolute;
    top: 26%;
    bottom: auto;
    left: auto;
    right: 26%;
  }
  .image-white {
    width: 100%;
    max-width: 1368px;
    filter: blur(100px);
    background-color: #fff;
    position: absolute;
    top: auto;
    bottom: 1%;
    left: 0%;
    right: 0%;
  }
`;
const Heading = styled.div`
  color: #1c132d;
  text-align: center;
  ${Heading1}
`;

const Description = styled.div`
  color: #5a5a6c;
  text-align: center;
  ${Body1}
`;

const Subcontent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Form = styled.div`
  text-align: -webkit-center;
`;
export { Content, Description, Heading, Subcontent, Form, Main };
