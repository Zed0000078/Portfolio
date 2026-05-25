import React from "react";
import "../styles/header.scss";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <HashLink className="logo" to={"/#home"}>MZ</HashLink>
      <main>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#skills"}>Skills</HashLink>
        <HashLink to={"/#experience"}>Experience</HashLink>
        <HashLink to={"/#projects"}>Projects</HashLink>
        <HashLink to={"/#contact"}>Contact</HashLink>
      </main>
    </nav>
  );
};

export default Header;
