import styled from 'styled-components';
import Link from 'next/link';
const Card = styled(Link)`
  border-radius: 12px;
  border: 1px solid #dfe5f1;
  display: flex;
  flex-direction: column;
  width: 412px;
  max-width: 100%;
  margin: 100px;
  transition: all 0.3s;
  &:hover {
    box-shadow: 4px 4px 40px 0px rgba(102, 94, 154, 0.12);
  }
`;

const CardImage = styled.div`
  .card-image {
    max-width: 100%;
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
`;
const Heading = styled.div`
  color: #1c132d;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Para = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  color: #5a5a6c;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export { Card, CardDescription, CardImage, Description, Para, Heading };
