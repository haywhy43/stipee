import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./SVG/logo";
import { Link } from "gatsby";
import Button from "./UI/button";

const navItems = [
  {
    text: "How it works",
    link: "how-it-works",
  },
  {
    text: "About us",
    link: "/about",
  },
  {
    text: "Blog",
    link: "/blog",
  },
  {
    text: "Help Centre",
    link: "/help",
  },
  {
    text: "Contact us",
    link: "/contact",
  },
];

const StyledHeader = styled.header`
  box-shadow: 0px 1px 0px rgba(157, 168, 182, 0.2);

  @media (max-width: 800px) {
    height: auto;
    padding: 18px 0px;

    .main-wrapper {
      display: block;

      .logo-wrapper {
        width: 100%;

        .stroke {
          height: 4px;
          background-color: #7a7a7a;
        }
      }
    }
  }
`;

const StyledNav = styled.nav`
  @media (max-width: 800px) {
    display: ${props => (props.isOpen ? "grid" : "none")};
    grid-gap: 10px;
    margin-top: 20px;
    width: 100%;
  }
`;

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <StyledHeader className="h-16 bg-white fixed top-0 left-0 w-full">
      <div className="w-11/12 mx-auto h-full main-wrapper flex items-center justify-between">
        <div className="flex items-center logo-wrapper justify-between">
          <Logo />
          <button className="grid gap-1" onClick={() => setNavOpen(!navOpen)}>
            <div className="rounded-full w-8 stroke"></div>
            <div className="rounded-full w-8 stroke"></div>
            <div className="rounded-full w-8 stroke"></div>
          </button>
        </div>
        <StyledNav isOpen={navOpen}>
          {navItems.map(item => (
            <Link to={item.link} className="mr-8 text-sm text-font font-medium">
              {item.text}
            </Link>
          ))}
          <Link to="/" >
            <Button text="Let’s Talk" icon="chat" />
          </Link>
        </StyledNav>
      </div>
    </StyledHeader>
  );
}
