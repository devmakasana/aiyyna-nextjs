import { styled } from 'styled-components';

import { Body2, Heading2 } from '@/app/styles/fontstyle';
import { colors } from '@/app/styles/colors';

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
  color: ${colors.body};
  ${Body2}
`;
const Description = styled.div`
  color: ${colors.title};
  ${Heading2}
  text-align: center;
  @media (max-width: 449px) {
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
  }
`;
const Heading = styled.div`
  width: 980px;
  padding-top: 154px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  @media (max-width: 449px) {
    width: 100%;
    padding-top: 126px;
  }
`;
const Mainimage = styled.div`
  width: 980px;
  padding: 40px 0;
  margin: 0 auto;
  @media (max-width: 449px) {
    width: 100%;
    padding: 30px 0;
    .blogimage {
      height: 230px;
      width: 100%;
    }
  }
`;

export { Group, Hero, Title, Description, Heading, Mainimage };
