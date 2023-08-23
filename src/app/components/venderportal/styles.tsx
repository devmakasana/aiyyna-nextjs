import { colors } from '@/app/styles/colors';
import { Body2, Heading3 } from '@/app/styles/fontstyle';
import { styled } from 'styled-components';
const Maindiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;
const Leftdiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;
const Rightdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Title = styled.div`
  color: ${colors.title};
  ${Heading3}
`;
const Description = styled.div`
   color: ${colors.body};
  ${Body2}
`;
export { Maindiv, Leftdiv, Rightdiv, Title, Description };
