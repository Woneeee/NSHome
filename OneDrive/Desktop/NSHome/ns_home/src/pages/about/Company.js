import styled from "styled-components";
import com_bg from "../../img/com_bg.jpeg";

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
`;

const Text = styled.div`
  h2 {
    font-size: 55px;
    font-weight: 500;
    letter-spacing: -1px;
  }
`;

const DesContainer = styled.section`
  width: 100%;
  padding: 100px 400px;
  /* background-color: pink; */
`;

const DesWrap = styled.div`
  width: 100%;
  /* background-color: skyblue; */
`;

const Title = styled.div`
  h2 {
    text-align: center;
    font-size: 35px;
    font-weight: 300;
  }
`;

const Des = styled.div`
  h4 {
    margin-top: 80px;
    font-size: 21px;
    font-weight: 600;
  }
  p {
    margin-top: 30px;
    line-height: 25px;
    font-size: 19px;
    opacity: 0.9;
  }
`;

export const Company = () => {
  return (
    <Container>
      <Bg>
        <Text>
          <h2>엔에스솔루션 소개</h2>
        </Text>
      </Bg>

      <DesContainer>
        <DesWrap>
          <Title>
            <h2>에너지 통합 모니터링 시스템 전문 개발회사</h2>
          </Title>

          <Des>
            <h4>
              2018년에 설립된 엔에스솔루션은 에너지 통합 모니터링 시스템을
              전문적으로 개발하는 기업으로 성장해 왔습니다.
            </h4>
            <p>
              공장 에너지 관리 시스템(FEMS) 구축부터 시스템 도입 컨설팅, 계측 및
              인프라 설치, 그리고 맞춤형 모니터링 시스템 개발까지 모든 단계를
              직접 수행합니다. 산업 현장의 특성에 맞춘 효율적인 에너지 관리
              솔루션을 제공하여 즉각적인 에너지 비용 절감과 운영 효율화를
              실현하며, 기업의 지속 가능한 성장을 지원합니다.
            </p>
          </Des>
        </DesWrap>
      </DesContainer>
    </Container>
  );
};
