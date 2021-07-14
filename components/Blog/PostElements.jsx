import styled from "styled-components";
import Image from "next/image"

export const PostWrapper = styled.article`
    font-family: 'Montserrat', sans-serif;
    max-width: 820px;
    margin: 2rem auto 7rem auto;
`
export const PostHeadSection = styled.div`
    margin-top: 2rem;
`
export const PostInfo = styled.div`
    color: #ACAFBA;    
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;


`
export const Title = styled.h1`
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: left;
    color: #1E2A37;
    margin-top:1rem;
`
export const MainImage = styled(Image)`
    margin-top: 1.5rem;
`
//need styles for h1 to h4, p, a, li, blockquote 
export const PostContent = styled.main`
    margin-top: 1.5rem;

    & div {
        /* background-color: red; */

        line-height: 1.75;
        color: #292929;

        p{
            margin-top: 1rem;
        }

        h1 , h2 {
            margin-top: 3.625rem;
        }

        h3, h4{
            margin-top: 3rem;
        }
        img {
            margin-top: 3rem;
            max-width: 100%;
        }

        a, a:hover, a:focus, a:active {
            text-decoration: underline;
            color: inherit;
        }

        ul {
            padding-left: 2.5rem;
            margin-top: 1.25rem;
        }

        blockquote {
            margin-top: 2.625rem;
            font-style: italic;
            padding: .8rem 1rem;
            background-color: #F9F9F9;
            border-left: 3px solid black;
        }
    }
    
`