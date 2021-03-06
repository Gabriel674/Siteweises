import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  font-family: "Open Sans", sans-serif;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  background: ${props => props.color};
  margin: 0 auto;
`;
export const Menu = styled.div``;
export const Header = styled.div`
  height: 80px;
  background: #e14eca;
  display: flex;
  align-items: center;
`;
export const MenuList = styled.ul`
  list-style: none;
  display: flex;
`;
export const MenuLink = styled.a`
  padding: 10px;
  transition: 0.6s;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: #fff;
  }

  .active {
    color: #fff;
    border-bottom: 3px solid #fff;
  }
`;
export const MenuText = styled.span`
  font-weight: bold;
  padding-bottom: 5px;
  font-size: 14px;
`;
export const Icons = styled.div``;
export const IconsList = styled.ul`
  display: flex;
  list-style: none;
`;
export const IconLink = styled.a`
  margin: 8px;
  padding: 2px;
  i {
    font-size: 22px;
    color: #fff;
  }
`;
export const Icon = styled.img``;
export const MenuFather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Box1 = styled.div`
  background: ${props => props.color};
  padding: 50px 0;
`;
export const ImageLateral = styled.div`
  width: 300px;
  height: 300px;
  background: red;
`;
