import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import {
  A,
  Button,
  Container,
  Img,
  Link,
  Logo,
  Manu,
  Navbar_Main,
  P,
  Sign,
} from "./styled";
import logo from "../../assets/GPT-3.png";

const Manus = () => {
  return (
    <>
      <P>
        <A href="#home">Home</A>
      </P>
      <P>
        <A href="#wgpt3">What is GPT3?</A>
      </P>
      <P>
        <A href="#possibility">Open AI</A>
      </P>
      <P>
        <A href="#features">Case Studies</A>
      </P>
      <P>
        <A href="#blog">Library</A>
      </P>
    </>
  );
};
const Navbar = () => {
  const [toggleManu, setToggleManu] = useState(false);
  return (
    <Navbar_Main>
      <Link>
        <Logo>
          <Img src={logo} alt="logo" />
        </Logo>
        <Container>
          <Manus />
        </Container>
      </Link>
      <Sign>
        <P>Sign in</P>
        <Button type="button">Sign up</Button>
      </Sign>
      <Manu>
        {toggleManu ? (
          <RiCloseLine className="svg"
            color="#fff"
            size={27}
            onClick={() => setToggleManu(false)}
          />
        ) : (
          <RiMenu3Line className="svg"
            color="#fff"
            size={27}
            onClick={() => setToggleManu(true)}
          />
        )}
        {toggleManu && (
          <Manu.Container>
            <Manu.Link>
              <Manus />
              <Sign className="close">
                <P>Sign in</P>
                <Button type="button">Sign up</Button>
              </Sign>
            </Manu.Link>
          </Manu.Container>
        )}
      </Manu>
    </Navbar_Main>
  );
};

export default Navbar;
