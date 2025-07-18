import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  width: 40px;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #333;
    font-size: 1rem;

    &:hover {
      color: hsl(5, 85%, 63%);
    }
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        <Logo src="/assets/images/logo.svg" alt="Logo" />
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
