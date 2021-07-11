import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { defaultStyles } from '../defaults/defaults';

import NavBar from '../components/Navbar/'
import SideBar from '../components/Sidebar'
import Footer from "../components/Footer";

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family:  ${defaultStyles.fontFamily};
  }
  a, li, ul {
    text-decoration: none;
  }
`;


function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;