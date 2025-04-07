import styled from "styled-components";
import logo from "../img/logo.svg";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: pink;
  padding: 10px 100px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;

const Logo = styled.div`
  height: 100%;
  background-color: aliceblue;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Menu = styled.ul`
  height: 100%;
  background-color: skyblue;
  display: flex;
  align-items: center;
  color: rgb(255, 255, 255);
  li {
    /* background-color: beige; */
    font-size: 20px;
    font-weight: 500;
    margin-right: 75px;
  }
  li:nth-child(4) {
    margin: 0;
  }
  a {
    color: rgb(255, 255, 255);
  }

  .dropdown {
    position: absolute;
    width: 220px;
    background-color: burlywood;
    margin-top: 20px;
    border-radius: 10px;
    li {
      font-size: 19px;
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
    }
  }
`;

const MenuIcon = styled.div`
  height: 100%;
  background-color: lightcoral;
  svg {
    width: 100%;
    height: 100%;
    font-size: 50px;
  }
`;

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null); // 활성화된 메뉴 상태 관리
  const [activeIcon, setActiveIcon] = useState(false);

  const mouseEnterHandler = (menu) => {
    setActiveMenu(menu);
  };
  const mouseLeaveHandler = () => {
    setActiveMenu(null);
  };
  const clickHandler = () => {
    setActiveIcon((prev) => !prev);
  };

  return (
    <SHeader>
      <Logo>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </Logo>

      <Menu>
        <li
          onMouseEnter={() => mouseEnterHandler("aboutus")}
          // onMouseLeave={mouseLeaveHandler}
        >
          <Link to={"/company"}>ABOUT US</Link>
          {activeMenu === "aboutus" && (
            <ul className="dropdown" onMouseLeave={mouseLeaveHandler}>
              <li>회사소개</li>
              <li>VISION</li>
              <li>핵심가치</li>
              <li>연혁</li>
              <li>인증</li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => mouseEnterHandler("business")}
          // onMouseLeave={mouseLeaveHandler}
        >
          <Link>BUSINESS</Link>
          {activeMenu === "business" && (
            <ul className="dropdown" onMouseLeave={mouseLeaveHandler}>
              <li>소프트웨어 개발</li>
              <li>인프라 구축</li>
              <li>정부지원사업</li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => mouseEnterHandler("solutions")}
          // onMouseLeave={mouseLeaveHandler}
        >
          <Link>SOLUTIONS</Link>
          {activeMenu === "solutions" && (
            <ul className="dropdown" onMouseLeave={mouseLeaveHandler}>
              <li>통합제어</li>
              <li>모니터링</li>
              <li>구축 효과</li>
              <li>적용 사례</li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => mouseEnterHandler("notice")}
          // onMouseLeave={mouseLeaveHandler}
        >
          <Link>NOTICE</Link>
          {activeMenu === "notice" && (
            <ul className="dropdown" onMouseLeave={mouseLeaveHandler}>
              <li>회사소식</li>
              <li>도입문의</li>
              <li>공지사항</li>
            </ul>
          )}
        </li>
      </Menu>

      <MenuIcon onClick={clickHandler}>
        <RiMenu3Fill />
      </MenuIcon>
    </SHeader>
  );
};
