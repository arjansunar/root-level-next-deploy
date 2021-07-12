import styled from "styled-components";
import Accordion from "./utility/Accordion";

const questionAnswer = [
    {
        question: 'Where is the company located?',
        answer: 'Nibh mattis luctus feugiat augue. In ut arcu dignissim fermentum pretium quam ultrices placerat. Ullamcorper mauris dolor aenean consectetur id auctor nulla enim quis. Porta amet venenatis sit nisl, '
    },
    {
        question: 'Where is the company located?',
        answer: 'Nibh mattis luctus feugiat augue. In ut arcu dignissim fermentum pretium quam ultrices placerat. Ullamcorper mauris dolor aenean consectetur id auctor nulla enim quis. Porta amet venenatis sit nisl, '
    },
    {
        question: 'Where is the company located?',
        answer: 'Nibh mattis luctus feugiat augue. In ut arcu dignissim fermentum pretium quam ultrices placerat. Ullamcorper mauris dolor aenean consectetur id auctor nulla enim quis. Porta amet venenatis sit nisl, '
    },
]

function FAQ() {
    return (
        <FWrapper>
            <Title>Frequently Asked Questions</Title>
            <div>
                {questionAnswer.map((val, i) => <Accordion {...val} key={i} />)}
            </div>
        </FWrapper>
    )
}

export default FAQ

export const Title = styled.h2`
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 3rem;
`
const FWrapper = styled.div`
    padding: 0 6rem;
    margin: 3rem 0 5rem 0;
    
    //make it responsive here 
    @media screen and (max-width: 750px ){
        padding: 0 3rem;
    }
    @media screen and (max-width: 500px ){
        padding: 0 1.5rem;
    }
`