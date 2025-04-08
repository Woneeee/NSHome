import styled from "styled-components";
import com_bg from "../../img/com_bg.jpeg";

const Container = styled.section`
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

export const Company = () => {
  return (
    <Container>
      <Bg>
        <Text>
          <h2>엔에스솔루션 소개</h2>
        </Text>
      </Bg>
    </Container>
  );
};
