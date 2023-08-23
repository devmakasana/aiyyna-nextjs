import styled from 'styled-components';
import { Body2, Heading1 } from './fontstyle';
import { colors } from './colors';
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
  color: ${colors.title};
  ${Heading1}
`;
const Description = styled.div`
  color: ${colors.body};
  ${Body2}
  text-align: center;
`;
const Heading = styled.div`
  width: 900px;
  padding: 80px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;
export { Group, Hero, Title, Description, Heading };
