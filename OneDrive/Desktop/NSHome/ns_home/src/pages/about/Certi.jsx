import styled from "styled-components";
import com_bg from "../../img/com_bg.jpeg";

const Container = styled.div`
  width: 100%;
`;

const Bg = styled.section`
  width: 100%;
  height: 450px;
  background-image: url(${com_bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  h1 {
    font-size: 55px;
    font-weight: 500;
    letter-spacing: -1px;
  }
`;

const Cer = styled.div``;

export const Certi = () => {
  return (
    <Container>
      <Bg>
        <Text>
          <h1>인증</h1>
        </Text>
      </Bg>
    </Container>
  );
};
