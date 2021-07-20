import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Router from 'next/router'
import { defaultStyles } from '../defaults/defaults';
import { PropagateLoader as Loader } from 'react-spinners'

import NavBar from '../components/Navbar/'
import SideBar from '../components/Sidebar'
import Footer from "../components/Footer";
import { ModalProvider, BaseModalBackground } from 'styled-react-modal'

import "../styles/globals.css"
const GlobalStyle = createGlobalStyle`
 
`;

// const LoaderWrapper = styled.div`
//   height: 100vh;
//   display: grid;
//   place-content: center;
// `
const StyledLoader = styled(Loader)`
  margin-top: 50rem;
`

const ModalBackground = styled(BaseModalBackground)`
  display: grid;
  overflow-x: hidden;
  background: rgba(0,0,0,0.9);
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
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
          <div id='loaderWrapper'>
            <StyledLoader loading={loading} color="#4ab5ac" size={18} />
          </div>
          :

          <ModalProvider backgroundComponent={ModalBackground}>
            <NavBar toggle={toggle} />
            <SideBar isOpen={isOpen} toggle={toggle} />
            <Component {...pageProps} />
            <Footer />
          </ModalProvider>
      }
    </>
  );
}

export default MyApp;