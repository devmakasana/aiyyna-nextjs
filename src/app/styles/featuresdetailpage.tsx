import styled from 'styled-components';
const Group = styled.div`
  background: #fff;
  width: 100%;
  max-width: 100%;
`;
const Hero = styled.div`
  background-image: url('maskbg.png');
  background-position: 50%;
  background-size: cover;
`;
const Title = styled.div`
  color: #1c132d;
  text-align: center;
  font-size: 58px;
  font-weight: 600;
`;
const Description = styled.div`
  color: #5a5a6c;
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  text-align: center;
`;
const Heading = styled.div`
  width: 900px;
  padding: 80px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;
export { Group, Hero, Title, Description, Heading };
