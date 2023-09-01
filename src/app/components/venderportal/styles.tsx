import { colors } from '@/app/styles/colors';
import { Body2, Heading3 } from '@/app/styles/fontstyle';
import { styled } from 'styled-components';
const Maindiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
  @media (max-width: 449px) {
    flex-direction: column;
    gap: 24px;
  }
`;
const Leftdiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  justify-content: center;
  display: flex;

  @media (max-width: 449px) {
    padding: 0;

    .portalimage {
      width: 345px;
      height: 187px;
    }
  }
`;
const Rightdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 449px) {
    gap: 0;
  }
`;
const Title = styled.div`
  color: ${colors.title};
  ${Heading3}
  @media (max-width: 449px) {
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    padding-bottom: 6px;
  }
`;
const Description = styled.div`
  color: ${colors.body};
  ${Body2}
  @media (max-width: 449px) {
    padding-top: 10px;
  }
`;
export { Maindiv, Leftdiv, Rightdiv, Title, Description };
