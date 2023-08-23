import { colors } from '@/app/styles/colors';
import { Body2 } from '@/app/styles/fontstyle';
import { styled } from 'styled-components';
const Maindiv = styled.div`
  padding-bottom: 40px;
  p {
    ${Body2}
    color: ${colors.body};
 
  }
  a {
    ${Body2}
    color: ${colors.primary};

    text-decoration-line: underline;
  }
`;
export { Maindiv };
