import { colors } from '@/app/styles/colors';
import { Body1, Body2, Heading1, Heading5 } from '@/app/styles/fontstyle';
import styled from 'styled-components';

const Main = styled.div``;

const Title = styled.div`
  color: ${colors.title};
  ${Heading1}
`;
const Description = styled.div`
  color: ${colors.body};
  ${Body1}
  margin-top: 15px;
`;
const Heading = styled.div`
  color: ${colors.title};
  ${Heading5}
  margin-top: 40px;
`;
const Subheading = styled.div`
  color: ${colors.body};
  ${Body2}
  margin-top: 4px;
`;

export { Main, Title, Description, Heading, Subheading };
