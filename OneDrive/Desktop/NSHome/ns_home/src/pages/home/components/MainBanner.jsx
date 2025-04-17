import styled, { keyframes } from "styled-components";
import main_bg from "../../../img/main_bg.jpeg";
import main_bg2 from "../../../img/main_bg2.jpeg";

const fadeInAndScale = keyframes`
  0% {
    opacity: 0.8;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: ${fadeInAndScale} 2s ease-in-out;
  }
`;

const Text = styled.div`
  position: absolute;
  top: 37%;
  left: 120px;
  letter-spacing: -1px;
  h2 {
    font-size: 60px;
    font-weight: 700;
    color: #fff;
    line-height: 73px;
  }
  p {
    font-size: 16px;
    color: #fff;
    line-height: 60px;
    font-weight: 500;
  }

  animation: ${fadeInAndScale} 2s ease-in-out;
`;

export const MainBanner = () => {
  return (
    <Container>
      <img src={main_bg} alt="main" />

      <Text>
        <h2>에너지 효율화를 통해</h2>
        <h2>미래를 선도하는 기업</h2>
        <p>
          엔에스솔루션에서는 독자적인 솔루션으로 산업현장의 획기적인 변화를
          선도합니다.
        </p>
      </Text>
    </Container>
  );
};
