import styled from "styled-components";
import main from "../../../img/main2.jpeg";
import { useState } from "react";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  img {
    height: 100%;
    object-fit: cover;
    object-position: center -10%;
  }
`;

export const MainBanner = () => {
  const activeMain = useState();

  return (
    <Container>
      <img className="active" src={main} alt="main" />
    </Container>
  );
};
