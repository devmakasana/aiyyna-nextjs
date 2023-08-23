import { colors } from '@/app/styles/colors';
import { Body2, Heading3, Heading4 } from '@/app/styles/fontstyle';
import { styled } from 'styled-components';
const Maindiv = styled.div`
padding-bottom: 50px;
  h3 {
    color: ${colors.title};
    ${Heading3}
    padding-bottom: 16px;
  }
  ol {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 40px;
    margin-left: 29px;
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
    ${Heading4}
    color: ${colors.title};

    padding: 20px 0 16px 0;
  }
`;
export { Maindiv };
