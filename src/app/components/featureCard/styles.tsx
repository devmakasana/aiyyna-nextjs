import styled from 'styled-components';
import Link from 'next/link';
import { Body2, Heading4 } from '@/app/styles/fontstyle';
import { colors } from '@/app/styles/colors';
const Card = styled(Link)`
  border-radius: 12px;
  border: 1px solid #dfe5f1;
  display: flex;
  flex-direction: column;
  max-width: 412px;
  width: 100%;
  transition: all 0.3s;
  text-decoration: none;
  &:hover {
    box-shadow: 4px 4px 40px 0px rgba(102, 94, 154, 0.12);
  }
`;

const CardImage = styled.div`
  .card-image {
    max-width: 100%;
    height: 100%;
  }
`;

const CardDescription = styled.div`
  background: #fff;
  border-radius: 0px 0px 12px 12px;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 30px;
  gap: 10px;
  @media (max-width: 449px) {
    padding: 20px 24px;
    gap: 8px;
  }
`;
const Heading = styled.div`
  color: ${colors.title};
  ${Heading4};
  font-family: 'Euclid Circular B Medium';
`;
const Para = styled.div`
  ${Body2};
  color: ${colors.body};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export { Card, CardDescription, CardImage, Description, Para, Heading };
