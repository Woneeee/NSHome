import styled from "styled-components";
import factory from "../../img/factory.jpeg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { case1 } from "../../config/case/case1";

const Container = styled.section`
  width: 100%;
`;

const Bg = styled.section`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${factory});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  h1 {
    font-size: 55px;
    font-weight: 500;
    letter-spacing: -1px;
  }
`;

const NavWrapper = styled.nav`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-bottom: 1px solid #55555580;
`;

const NavItem = styled.div`
  padding: 20px 0;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.$active ? "2px solid black" : "2px solid transparent"};
  transition: border-bottom 0.2s ease;
`;

const FemsContainer = styled.section`
  max-width: 1140px;
  width: 100%;
  /* background-color: pink; */
  margin: 0 auto;
  h2 {
    font-size: 35px;
    font-weight: 500;
    letter-spacing: -1px;
  }
`;

const Company = styled.ul`
  width: 100%;
  /* background-color: violet; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 60px;
  li {
    height: 300px;
    border-radius: 15px;
    background-color: lavender;
  }
`;

const ImgBox = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ComIntro = styled.div``;

export const Case = () => {
  const navItems = ["FEMS", "ENMS", "공기압축기", "스마트생태공장"];
  const [activeItem, setActiveItem] = useState("FEMS");
  console.log(case1);

  return (
    <Container>
      <Bg>
        <h1>고객 사례</h1>
      </Bg>

      <NavWrapper>
        {navItems.map((item) => (
          <NavItem
            key={item}
            $active={activeItem === item}
            onClick={() => setActiveItem(item)}
          >
            <Link to={`/case/${item}`}>{item}</Link>
          </NavItem>
        ))}
      </NavWrapper>

      <FemsContainer>
        <h2>~2022</h2>

        <Company>
          {case1.map((case1) => (
            <li>
              <ImgBox>
                <img src={case1.img_url} alt="공장이미지" />
              </ImgBox>
              <ComIntro>
                <h3>{case1.company}</h3>
                <p>솔루션: 비즈니스명</p>
              </ComIntro>
            </li>
          ))}
        </Company>
      </FemsContainer>
    </Container>
  );
};

// case 페이지를 하나로 끝낼 수 있을지 아니면 여러개로 나눠서 해야하는지 모르겠음
// useState 를 나는 보통 true false 로 많이 만들어서 썻는데, 안에 문자열도 충분히 들어가서 사용할 수 있다고 기억을 해야함
// 이렇게 적용시킨걸 통으로 그냥 외워버리면 다음에 기억에 의존해서 바로 자동으로 사용가능할 수 있겠다.
// 그 밑에부터 어떻게 적용시켜야할지를 모르겠는데 진심으로
// 나도 집중을 하고 싶은데 어떻게 하면 집중을 할 수 있을까
