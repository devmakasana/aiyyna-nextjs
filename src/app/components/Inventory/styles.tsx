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
  @media (max-width: 449px) {
    flex-direction: column-reverse;
    padding: 60px 0;
    gap: 24px;
  }
`;
const Leftdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 449px) {
    gap: 14px;
  }
`;
const Rightdiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
  @media (max-width: 449px) {
    .inventoryimage {
      width: 345px;
      height: 188px;
    }
  }
`;
const Title = styled.div`
  color: ${colors.title};
  ${Heading3}
  @media (max-width: 449px) {
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
  }
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
