import styled from "styled-components";
import logo from "../img/logo.svg";
import { RiMenu3Fill, RiMenuFold3Fill } from "react-icons/ri";

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  background-color: pink;
  padding: 10px 100px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  /* width: 10%; */ //억지로 크기를 늘리면 깨짐 (가로크기는 웬만하면 자식에서 정하기)
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
  li {
    font-size: 20px;
    font-weight: 500;
    margin-right: 20px;
  }
  li:nth-child(4) {
    margin: 0;
  }
  // li:nth-child 쓰는 위치가 부모 요소 바로 밑에서 써야함
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
  return (
    <SHeader>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>

      <Menu>
        <li>ABOUT US</li>
        <li>BUSINESS</li>
        <li>SOLUTION</li>
        <li>NOTICE</li>
      </Menu>

      <MenuIcon>
        <RiMenu3Fill />
      </MenuIcon>
    </SHeader>
  );
};
