import styled, { keyframes } from "styled-components";
import main_bg from "../../../img/main_bg.jpeg";
import main_bg2 from "../../../img/main_bg2.jpeg";
import main_bg3 from "../../../img/main_bg3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "../components/bannerStyles.css";

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
`;

const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  animation: ${fadeInAndScale} 2s ease-in-out;
`;

const Bg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #18181873;
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
    width: 600px;
    font-size: 16px;
    color: #fff;
    line-height: 30px;
    margin-top: 10px;
    font-weight: 500;
  }

  animation: ${fadeInAndScale} 2s ease-in-out;
`;

export const MainBanner = () => {
  return (
    <Container>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        initialSlide={0}
      >
        <SwiperSlide>
          <ImgBox>
            <img src={main_bg3} alt="" />
          </ImgBox>
          <Bg />

          <Text>
            <h2>탄소중립의 가치를 선도하는</h2>
            <h2>에너지 통합 솔루션의 리더</h2>

            <p>
              엔에스솔루션에서는 ESG 경영의 실현을 돕고, 지속 가능한 미래를 위한
              스마트 에너지 관리 기술의 선두주자로 자리매김하겠습니다.
            </p>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <ImgBox>
            <img src={main_bg} alt="" />
          </ImgBox>
          <Bg />

          <Text>
            <h2>에너지 효율화를 통해</h2>
            <h2>미래를 선도하는 기업</h2>
            <p>
              엔에스솔루션에서는 독자적인 솔루션으로 산업현장의 획기적인 변화를
              선도합니다.
            </p>
          </Text>
        </SwiperSlide>

        <SwiperSlide>
          <ImgBox>
            <img src={main_bg2} alt="" />
          </ImgBox>
          <Bg />

          <Text>
            <h2>에너지 효율화를 통해</h2>
            <h2>미래를 선도하는 기업</h2>
            <p>
              엔에스솔루션에서는 독자적인 솔루션으로 산업현장의 획기적인 변화를
              선도합니다.
            </p>
          </Text>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
