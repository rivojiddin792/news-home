import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg"; // <-- logo fayli shu yerda

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

const Logo = styled.img`
  width: 40px;
`;

const NavButtons = styled.nav`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;
    font-weight: 500;

    &:hover {
      color: hsl(5, 85%, 63%);
    }
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        <Logo src={logo} alt="Logo" />
      </div>
      <NavButtons>
        <Link to="/">Home</Link>
        <Link to="/new">New</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/categories">Categories</Link>
      </NavButtons>
    </HeaderWrapper>
  );
}
