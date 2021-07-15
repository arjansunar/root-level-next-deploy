import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Router from 'next/router'
import { defaultStyles } from '../defaults/defaults';
import { PropagateLoader as Loader } from 'react-spinners'

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

const LoaderWrapper = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
`
const StyledLoader = styled(Loader)`
  margin-top: 50rem;
`




function MyApp({ Component, pageProps }) {

  //for mobile menu
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  //for initial loader
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  //for route changes and showing progress bar 
  Router.events.on("routeChangeStart", () => {
    setLoading(true)
    // nProgress.start()
  })

  Router.events.on("routeChangeComplete", () => {
    // nProgress.done() 
    setLoading(false)
  })
  return (
    <>
      <GlobalStyle />
      {
        loading ?
          <LoaderWrapper>
            <StyledLoader loading={loading} color="#4ab5ac" size={18} />
          </LoaderWrapper>
          :

          <>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Component {...pageProps} />
            <Footer />
          </>
      }
    </>
  );
}

export default MyApp;