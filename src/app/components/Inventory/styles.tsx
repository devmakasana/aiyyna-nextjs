import { colors } from '@/app/styles/colors';
import { Body2, Heading3 } from '@/app/styles/fontstyle';
import { styled } from 'styled-components';
const Maindiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
`;
const Leftdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Rightdiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
   color: ${colors.title};
  ${Heading3}
`;
const Description = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  color: ${colors.body};
  ${Body2}
`;

const Points = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 10px;
`;
export { Maindiv, Leftdiv, Rightdiv, Title, Description, Points };
