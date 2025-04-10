import styled from "styled-components";
import com_bg from "../../img/com_bg.jpeg";
import { useState } from "react";
import cer1 from "../../img/cer1.png";
import cer2 from "../../img/cer2.png";
import cer3 from "../../img/cer3.png";

const Container = styled.div`
  width: 100%;
`;

const Bg = styled.section`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${com_bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Text = styled.div`
  h1 {
    font-size: 55px;
    font-weight: 500;
    letter-spacing: -1px;
  }
`;

const HisContainer = styled.section`
  width: 100%;
  padding: 120px 0 0 0;
  /* background-color: lavender; */
  &.second_his {
    padding: 0;
    margin-bottom: 120px;
  }
`;

const HisWrap = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  /* background-color: lightblue; */
  h2 {
    font-size: 35px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 120px;
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  /* background-color: pink; */
  li {
    width: 50%;
    padding: 18px 0;
    font-size: 20px;
    font-weight: 300;
    border: 1px solid #222222;
    cursor: pointer;
  }
  li:nth-child(1) {
    background-color: ${(props) => props.$hiscolor};
  }
  li:nth-child(2) {
    background-color: ${(props) => props.$cercolor};
  }
`;

const HisCon = styled.div`
  /* background-color: beige; */
  justify-content: space-between;
  margin-top: 120px;
  display: ${(props) => props.$hiscontents};
`;

const Year = styled.div`
  font-size: 60px;
  font-weight: 500;
  color: #2525a0;
  width: 160px;
  /* background-color: pink; */
  line-height: 70px;
`;

const His = styled.ul`
  h3 {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 15px;
  }
  li {
    width: 750px;
    border-top: 2px solid #333333;
    padding: 25px 0;
    padding-left: 15px;
  }
  p {
    font-weight: 300;
    font-size: 17px;
    line-height: 30px;
  }
`;

const CerContainer = styled.ul`
  max-width: 1140px;
  width: 100%;
  margin: 120px auto;
  /* background-color: pink; */
  display: ${(props) => props.$cercontents};
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 48%;
    height: 250px;
    /* background-color: lavender; */
    margin-bottom: 50px;
    padding: 20px;
    display: flex;
    border: 1px solid #5f5f5f32;
    border-radius: 10px;
  }
  h3 {
    font-size: 25px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
`;

const ImgBox = styled.div`
  width: 150px;
  height: 100%;
  margin-right: 30px;
  border: 1px solid #5f5f5f32;
  padding: 1px;
  border-radius: 5px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

export const History = () => {
  const [hisOn, setHisOn] = useState(true);
  const [cerOn, setCerOn] = useState(false);

  const hisHandler = () => {
    setHisOn(true);
    setCerOn(false);
  };

  const cerHandler = () => {
    setCerOn(true);
    setHisOn(false);
  };

  return (
    <Container>
      <Bg>
        <Text>
          <h1>연혁 및 인증</h1>
        </Text>
      </Bg>

      <HisContainer>
        <HisWrap>
          <h2>
            "독자적이고 최적의 솔루션 컨설팅 및 구축 서비스를 여러분과 함께
            하겠습니다."
          </h2>

          <Menu
            $hiscolor={hisOn ? "beige" : "white"}
            $cercolor={cerOn ? "beige" : "white"}
          >
            <li onClick={hisHandler}>연혁</li>
            <li onClick={cerHandler}>인증</li>
          </Menu>

          <HisCon $hiscontents={hisOn ? "flex" : "none"}>
            <Year>2021-2024</Year>

            <His>
              <li>
                <h3>2024년</h3>
                <p>· 신평장림 산단 20개소 FEMS 인프라 구축</p>
                <p>· 신평장림 산단 13개소 공기압축기 제어 시스템 구축</p>
                <p>· fFEMS 6개소 설치 및 납품</p>
                <p>· 스마트 생태공장 구축사업 2개소 설치 및 납품</p>
              </li>
              <li>
                <h3>2023년</h3>
                <p>· 대불산단 20개 업체 공기압축기 제어 시스템 구축</p>
                <p>· FEMS 10개소 설치 및 납품</p>
                <p>· 스마트 생태공장 구축사업 4개소 설치 및 납품</p>
              </li>
              <li>
                <h3>2022년</h3>
                <p>· FEMS 12개소 설치 및 납품</p>
                <p>· NIXPACK 신규버전 개발</p>
              </li>
              <li>
                <h3>2021년</h3>
                <p>· 전국 187개소 통합 공기압축기 시스템 체크 시스템 개발</p>
                <p>· 레이다를 이용한 자동 불량 체크 및 재고파악 시스템 개발</p>
              </li>
            </His>
          </HisCon>
        </HisWrap>
      </HisContainer>

      <HisContainer className="second_his">
        <HisWrap>
          <HisCon $hiscontents={hisOn ? "flex" : "none"}>
            <Year>2020-2018</Year>

            <His>
              <li>
                <h3>2020년</h3>
                <p>· 공기압축기 통합제어 시스템 개발</p>
                <p>· 고전력 고전압 자동제어 시스템 개발</p>
                <p>· 고도화 FEMS 2개소 설치 및 납품</p>
                <p>· 공기압축기 모니터링 시스템 개발 및 납품</p>
              </li>
              <li>
                <h3>2019년</h3>
                <p>· 기업부설 연구소 설립</p>
                <p>· 전력 통합제어 및 분석 시스템 개발 및 납품</p>
              </li>
              <li>
                <h3>2018년</h3>
                <p>· 주식회사 엔에스 솔루션 설립</p>
              </li>
            </His>
          </HisCon>
        </HisWrap>
      </HisContainer>

      <CerContainer $cercontents={cerOn ? "flex" : "none"}>
        <li>
          <ImgBox>
            <img src={cer1} alt="인증1" />
          </ImgBox>
          <h3>벤처기업확인서</h3>
        </li>
        <li>
          <ImgBox>
            <img src={cer2} alt="인증2" />
          </ImgBox>
          <h3>중소기업확인서</h3>
        </li>
        <li>
          <ImgBox>
            <img src={cer3} alt="인증3" />
          </ImgBox>
          <h3>기업부설연구소 인증서</h3>
        </li>
      </CerContainer>
    </Container>
  );
};
