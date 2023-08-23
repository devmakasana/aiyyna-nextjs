import styled from 'styled-components';
import { Body2, Heading2 } from '@/app/styles/fontstyle';

const Group = styled.div`
  background: #fff;
  width: 100%;
  max-width: 100%;
`;
const Hero = styled.div`
  background-image: url('maskbg.png');
  background-position: 50%;
  background-size: cover;
`;
const Title = styled.div`
  color: #5a5a6c;
  ${Body2}
`;
const Description = styled.div`
  color: #5a5a6c;
  ${Heading2}
  text-align: center;
`;
const Heading = styled.div`
  width: 980px;
  padding-top: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
const Mainimage = styled.div`
  width: 980px;
  padding: 40px 0;
  margin: 0 auto;
`;

const Points = styled.div`
  max-width: 1124px;
  width: 100%;
  margin: 0 auto;
`;
export { Group, Hero, Title, Description, Heading, Mainimage, Points };
