import { colors } from '@/app/styles/colors';
import { Body2, Heading3, Heading4 } from '@/app/styles/fontstyle';
import { styled } from 'styled-components';
const Maindiv = styled.div`
  padding-bottom: 50px;
  h3 {
    padding-top: 40px;
    ${Heading3}
    color: ${colors.title};
  }
  p {
    padding-top: 16px;
    ${Body2}
    color:${colors.body};
  }
  a {
    ${Body2}
    color: #635BFF;
    text-decoration-line: underline;
  }
  h4 {
    ${Heading4}
    padding-top: 20px;
  }
  ol {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 29px;
    padding-top: 16px;
    p {
      padding: 0;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 29px;
    padding-top: 16px;

    p {
      padding: 0;
    }
  }
`;
export { Maindiv };
