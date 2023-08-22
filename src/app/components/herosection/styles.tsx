import { styled } from 'styled-components';
const Maindiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 44px;
  @media screen and (max-width: 991px) {
    width: auto;
    flex-direction: column;
    padding-bottom: 60px;
  }
  .image {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }
  .image.circle {
    width: 100%;
    max-width: 367px;
    filter: blur(160px);
    background-color: #b6dfff;
    position: absolute;
    bottom: 276px;
    left: 790px;
    right: auto;
    @media screen and (max-width: 991px) {
      bottom: 0;
      left: auto;
    }
  }
  .image.ellipse {
    width: 100%;
    max-width: 593px;
    filter: blur(105px);
    background-image: linear-gradient(207.87deg, #efe3ff 27.83%, #cac6ff);
    position: absolute;
    top: 62px;
    bottom: auto;
    left: auto;
    right: -52px;
    @media screen and (max-width: 991px) {
      top: 468px;
      right: 213px;
    }
  }
  .image.white {
    width: 100%;
    height: 755px;
    max-width: 375px;
    filter: blur(100px);
    object-fit: cover;
    background-color: #fff;
    position: absolute;
    top: -17%;
    bottom: auto;
    left: 6%;
    right: auto;
  }
  .image.round {
    width: 100%;
    max-width: 367px;
    filter: blur(120px);
    background-color: #c0c0fe;
    position: absolute;
    top: auto;
    bottom: 250px;
    left: auto;
    right: 3%;
    width: 991px;
    @media screen and (max-width: 991px) {
      bottom: 0;
    }
  }
`;
const Leftcontent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 608px;
  z-index: 3;
  position: relative;
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
  margin-right: -292px;
  max-width: 100%;
  height: 585px;

  @media screen and (max-width: 991px) {
    margin-right: 0;
    height: auto;
    /* width: 100%; */
  }
  .heroimage {
    z-index: 3;
    position: relative;
    border-radius: 20px;
    border: 1px solid #dfe5f1;
    background: #d9d9d9;
    box-shadow: 0px 0px 14px 0px rgba(102, 94, 154, 0.1);
    @media screen and (max-width: 991px) {
      margin-right: 0;
      width: 100%;
      height: auto;
    }
  }
`;
export { Maindiv, Leftcontent, Rightcontent, Title, Description, Top, Images };
