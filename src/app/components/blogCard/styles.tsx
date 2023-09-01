import styled from 'styled-components';
import Link from 'next/link';
import { Body2, Heading4 } from '@/app/styles/fontstyle';
import { colors } from '@/app/styles/colors';

const Content = styled(Link)`
  display: flex;
  flex-direction: column;
  max-width: 412px;
  width: 100%;
  border: 1px solid #dfe5f1;
  border-radius: 10px;
  transition: all 0.3s;
  background: #fff;
  &:hover {
    box-shadow: 4px 4px 40px -32px rgba(102, 94, 154, 0.12);
  }
  .card-image {
    background-size: cover;
    border-radius: 10px 10px 0 0;
    width: 100%;
    max-width: 410px;
  }
  @media (max-width: 449px) {
    .card-image {
      height: 235px;
    }
  }
`;

const Below = styled.div`
  padding: 25px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  @media (max-width: 449px) {
    padding: 15px 14px;
  }
`;
const Datetitle = styled.div`
  color: ${colors.body};
  ${Body2}
`;

const Description = styled.div`
  ${Heading4}
  color: ${colors.title};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  @media (max-width: 449px) {
    font-size: 18px;
    line-height: 25px;
    font-weight: 600;
  }
`;
export { Below, Datetitle, Description, Content };
