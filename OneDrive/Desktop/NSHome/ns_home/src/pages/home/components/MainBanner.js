import styled from "styled-components";
import main from "../../../img/main2.jpeg";
import { useEffect, useState } from "react";

const Container = styled.section`
  width: 100%;
  height: 100vh;
  img {
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    transform: scale(1.2);
    transition: opacity 2s ease-in-out, transform 2s ease-in-out;
  }

  img.active {
    opacity: 1; /* 이미지가 서서히 나타남 */
    transform: scale(1);
  }
`;

export const MainBanner = () => {
  const [activeMain, setActiveMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveMain(true); // 2초 후 페이드 인 시작
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <img className={activeMain ? "active" : ""} src={main} alt="main" />
    </Container>
  );
};
