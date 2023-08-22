import styled from 'styled-components';
import Link from 'next/link';

const Content = styled(Link)`
  display: flex;
  flex-direction: column;
  max-width: 410px;
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
`;

const Below = styled.div`
  padding: 25px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
`;
const Datetitle = styled.div`
  color: #5a5a6c;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;

const Description = styled.div`
  color: #1c132d;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
export { Below, Datetitle, Description, Content };
