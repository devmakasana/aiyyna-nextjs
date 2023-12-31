import { colors } from '@/app/styles/colors';
import { Body1, Body2, Heading2 } from '@/app/styles/fontstyle';
import styled from 'styled-components';

const Main = styled.div``;

const Content = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: 449px) {
    flex-direction: column;
    gap: 24px;
  }
`;
const Left = styled.div`
  width: 50%;
  .main-blog {
    width: 100%;
    max-width: 623px;
    border-radius: 10px;
  }
  @media (max-width: 449px) {
    width: 100%;
    .main-blog {
      height: 230px;
    }
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  @media (max-width: 449px) {
    width: 100%;
  }
`;
const Datetiltle = styled.div`
  color: ${colors.body};
  ${Body1}
  @media (max-width: 449px) {
    ${Body2}
  }
`;
const Heading = styled.div`
  color: ${colors.title};
  ${Heading2}
  margin-top: 14px;
  @media (max-width: 449px) {
    font-size: 26px;
    font-weight: 600;
    line-height: 33px;
  }
`;
const Description = styled.div`
  color: #5a5a6c;
  color: ${colors.body};
  ${Body1}
  margin-top: 10px;
  margin-bottom: 30px;
  @media (max-width: 449px) {
    ${Body2}
  }
`;

export { Main, Content, Left, Right, Description, Datetiltle, Heading };
