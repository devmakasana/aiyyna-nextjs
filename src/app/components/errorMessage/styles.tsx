import { colors } from '@/app/styles/colors';
import { Body1, Heading1 } from '@/app/styles/fontstyle';
import styled from 'styled-components';

const Maindiv = styled.div`
  padding: 154px 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
const Title = styled.div`
  ${Heading1}
  color: ${colors.title};
`;
const Description = styled.div`
  color: ${colors.body};

  ${Body1}
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export { Maindiv, Heading, Title, Description, Bottom };
