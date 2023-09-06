import { colors } from '@/app/styles/colors';
import { Body2, Heading2, Heading3, Heading4 } from '@/app/styles/fontstyle';
import { styled } from 'styled-components';
const Maindiv = styled.div`
  padding-bottom: 50px;
  h1 {
    ${Heading2}
    color: ${colors.title};
    @media (max-width: 449px) {
      font-size: 26px;
      line-height: 33px;
    }
  }
  h2 {
    color: ${colors.title};

    font-size: 30px;
    font-weight: 600;
    line-height: 38px;
    @media (max-width: 449px) {
      font-size: 24px;
      font-weight: 500;
      line-height: 30px;
    }
  }
  h3 {
    color: ${colors.title};
    ${Heading3}
    padding-bottom: 16px;
    @media (max-width: 449px) {
      font-size: 22px;
      line-height: 28px;
      padding-bottom: 16px;
    }
  }
  ol {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 40px;
    margin-left: 29px;
    @media (max-width: 449px) {
      padding-bottom: 60px;
    }
  }

  p {
    ${Body2}
    color: ${colors.body};
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 29px;
  }
  h4 {
    padding-top: 20px;
    color: ${colors.title};
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;
    padding: 20px 0 16px 0;

    @media (max-width: 449px) {
      font-size: 20px;
      line-height: 25px;
      padding: 16px 0 16px 0;
    }
  }

  h5 {
    ${Heading4}
    color: ${colors.title};
    @media (max-width: 449px) {
      font-size: 18px;
      line-height: 23px;
    }
  }
  h6 {
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    color: ${colors.title};
    @media (max-width: 449px) {
      font-size: 16px;
      line-height: 20px;
    }
  }

  a {
    ${Body2}
    color: #635BFF;
  }
`;
export { Maindiv };
