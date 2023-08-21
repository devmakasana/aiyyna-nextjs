import { styled } from 'styled-components';
const Maindiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 44px;
`;
const Leftcontent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 608px;
`;
const Rightcontent = styled.div``;
const Title = styled.div`
  color: #1c132d;
  font-size: 58px;
  font-weight: 600;
`;
const Description = styled.div`
  color: #5a5a6c;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Images = styled.div`
  object-fit: cover;
  margin-right: -292px;
  max-width: 100%;
  height: 585px;
  .heroimage {
    border-radius: 20px;
    border: 1px solid #dfe5f1;
    background: #d9d9d9;
    box-shadow: 0px 0px 14px 0px rgba(102, 94, 154, 0.1);
  }
`;
export { Maindiv, Leftcontent, Rightcontent, Title, Description, Top, Images };
