import styled from "styled-components";
import request_bg from "../../img/request_bg.jpeg";

const Container = styled.section`
  width: 100%;
`;

const Bg = styled.div`
  width: 100%;
  height: 450px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${request_bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  h1 {
    font-size: 55px;
    font-weight: 500;
    letter-spacing: -1px;
    position: absolute;
  }
`;

const ImgBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #d0d0d02c;
`;

export const Request = () => {
  return (
    <Container>
      <Bg>
        <ImgBg />
        <h1>고객 문의</h1>
      </Bg>
    </Container>
  );
};
