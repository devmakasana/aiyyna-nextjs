import styled from 'styled-components';
import { Heading1 } from './fontstyle';
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
  ${Heading1}
  color:${colors.title};
`;

const Heading = styled.div`
  padding: 80px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export { Group, Hero, Title, Heading };
