import styled from 'styled-components';

const Main = styled.div`
  padding-top: 50px;
  @media (max-width: 449px) {
    padding-bottom: 60px;
  }
`;

const Box = styled.div`
  text-align: center;
  .slick-dots li {
    margin: 0;
    width: 15px;
  }
  .slick-dots li.slick-active button:before {
    color: #635bff !important;
  }

  .slick-dots li button:before {
    font-family: 'slick';
    font-size: 8px;
    line-height: 20px;
    margin-top: 20px;
    width: 8px;
    height: 8px;
    @media (max-width: 568px) {
      font-size: 8px;
    }
    content: '•';
    text-align: center;
    color: #dfe5f1 !important;
    opacity: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
const Leftarrow = styled.div`
  padding-left: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-size: cover;
  transition: all 0.3s;
  &:hover {
    svg {
      path {
        stroke: #1c132d;
      }
    }
  }
  svg {
    vertical-align: middle;
  }
`;
const Rightarrow = styled.div`
  padding-right: 18px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-size: cover;
  transition: all 0.3s;
  &:hover {
    svg {
      path {
        stroke: #1c132d;
      }
    }
  }
  svg {
    vertical-align: middle;
  }
`;
const Arrow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
  max-width: 900px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export { Main, Box, Leftarrow, Rightarrow, Arrow };
