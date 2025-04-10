import styled from "styled-components";
import logo from "../img/logo.svg";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import bg from "../img/main4.jpeg";

const SHeader = styled.header`
  width: 100%;
  padding: 25px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  border-bottom: 1px solid #99999940;
`;

const Logo = styled.h1`
  width: 80px;
  height: 100%;
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Menu = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  color: rgb(255, 255, 255);
  li {
    font-size: 18px;
    font-weight: 500;
    margin-right: 80px;
    letter-spacing: -0.5px;
  }
  li:nth-child(4) {
    margin: 0;
  }
  a {
    color: ${(props) => (props.$home ? "white" : "black")};
  }

  .dropdown {
    position: absolute;
    width: 200px;
    background-color: rgb(255, 255, 255);
    margin-top: 43px;
    border-radius: 10px;
    box-shadow: 1px 1px 3px rgba(44, 44, 44, 0.2);
    //rgba 색상 조절하기
    li {
      font-size: 17px;
      font-weight: 400;
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      margin-left: 10px;
    }
    a {
      color: rgb(51, 51, 51);
    }
  }
`;

const MenuIcon = styled.div`
  height: 100%;
  color: rgb(255, 255, 255);
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    font-size: 50px;
  }
`;

const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  visibility: ${(props) => props.$active};
`;

const Bg = styled.div`
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const Close = styled.div`
  font-size: 60px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  svg {
    position: absolute;
    top: 10px;
    right: 100px;
  }
`;

export const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null); // 활성화된 메뉴 상태 관리
  const [activeModal, setActiveModal] = useState(false);

  const mouseEnterHandler = (menu) => {
    setActiveMenu(menu);
  };
  const mouseLeaveHandler = () => {
    setActiveMenu(null);
  };
  const clickHandler = () => {
    setActiveModal(true);
  };
  const closeHandler = () => {
    setActiveModal(false);
  };
  const path = useLocation();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (path.pathname === "/") {
      setIsHome(true); // 홈일 때는 true
    } else {
      setIsHome(false); // 홈이 아닐때는 flase
    }
    console.log(path.pathname);
  }, [path.pathname]);
  // 해보고 안되면은 그냥 지우면 됨

  console.log(isHome);

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
          <Link to={"/company"} $home={isHome}>
            ABOUT US
          </Link>
          {activeMenu === "aboutus" && (
            <ul className="dropdown" onMouseLeave={mouseLeaveHandler}>
              <li>
                <Link to={"/company"}>회사소개</Link>
              </li>
              <li>
                <Link to={"/vision"}>VISION</Link>
              </li>
              <li>
                <Link to={"/keyvalue"}>핵심가치</Link>
              </li>
              <li>
                <Link to={"/history"}>연혁 및 인증</Link>
              </li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => mouseEnterHandler("business")}
          // onMouseLeave={mouseLeaveHandler}
        >
          <Link $home={isHome}>BUSINESS</Link>
          {activeMenu === "business" && (
            <ul className="dropdown" onMouseLeave={mouseLeaveHandler}>
              <li>
                <Link to={"/company"}>소프트웨어 개발</Link>
              </li>
              <li>
                <Link to={"/company"}>인프라 구축</Link>
              </li>
              <li>
                <Link to={"/company"}>정부지원사업</Link>
              </li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => mouseEnterHandler("solutions")}
          // onMouseLeave={mouseLeaveHandler}
        >
          <Link $home={isHome}>SOLUTIONS</Link>
          {activeMenu === "solutions" && (
            <ul className="dropdown" onMouseLeave={mouseLeaveHandler}>
              <li>
                <Link to={"/company"}>통합제어</Link>
              </li>
              <li>
                <Link to={"/company"}>모니터링</Link>
              </li>
              <li>
                <Link to={"/company"}>구축 효과</Link>
              </li>
              <li>
                <Link to={"/company"}>적용 사례</Link>
              </li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => mouseEnterHandler("notice")}
          // onMouseLeave={mouseLeaveHandler}
        >
          <Link $home={isHome}>NOTICE</Link>
          {activeMenu === "notice" && (
            <ul className="dropdown" onMouseLeave={mouseLeaveHandler}>
              <li>
                <Link to={"/company"}>회사소식</Link>
              </li>
              <li>
                <Link to={"/company"}>도입문의</Link>
              </li>
              <li>
                <Link to={"/company"}>공지사항</Link>
              </li>
            </ul>
          )}
        </li>
      </Menu>

      <MenuIcon>
        <RiMenu3Fill onClick={clickHandler} />
      </MenuIcon>

      <Modal $active={activeModal ? "visible" : "hidden"}>
        <Bg>
          <img src={bg} alt="menuBg" />
        </Bg>

        <Close onClick={closeHandler}>
          <IoClose />
        </Close>
      </Modal>
    </SHeader>
  );
};
