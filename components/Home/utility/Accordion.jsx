import { useState } from "react"
import styled, { css } from "styled-components"
import { defaultStyles } from '../../../defaults/defaults'

function Accordian({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false)

    return (
        <Wrapper>
            <QuestionWrapper onClick={() => setShowAnswer(!showAnswer)} active={showAnswer}>
                <Question>
                    {question}
                </Question>
                <span>

                    {showAnswer ? "-" : "+"}
                </span>
            </QuestionWrapper>
            <AnswerWrapper active={showAnswer}>
                <Answer active={showAnswer}>
                    {answer}
                </Answer>
            </AnswerWrapper>

        </Wrapper>
    )
}

export default Accordian

const Wrapper = styled.div`
    border: 1px solid #E6E6E6;
    margin: 0 auto;
    margin-bottom: 1.5rem;
    max-width: 1180px;
    max-height: none;
`
const activeStyles = css`
    color: ${defaultStyles.brandColor};

    & span{
        transform: rotate(-180deg);
        transition: transform .2s ease-in-out;
    }
`
const deactiveStyles = css`
    & span{
        transform: rotate(0deg);
        transition: transform .2s ease-in-out;
    }
`
const QuestionWrapper = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

    padding:2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: color .4s ease-in-out;

    & span{
        font-size: 1.8rem;
        font-weight: 400;
    }

    ${({ active }) => active ? activeStyles : deactiveStyles}
`
const Question = styled.p`

`
const showAnswerStyle = css`
    /* transition: max-height .2s ease-in-out; */

    overflow: hidden;
    max-height: 500px;
    height: auto;
    /* transition: max-height .2s ease-in-out; */

`
const hideAnswer = css`
    transition-delay: .2s;
    padding: 0;
    overflow: hidden;
    max-height: 0;
    /* height: auto; */
`
const AnswerWrapper = styled.div`
    //font styles
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #A1A4A4;
    transition: max-height .3s ;
    ${({ active }) => active ? showAnswerStyle : hideAnswer}
`
const showP = css`
    opacity: 1;
`
const hideP = css`
    margin: 0;
    opacity: 0;
    overflow: hidden;
`

const Answer = styled.p`
    padding:2rem;
    padding-top: 0;    
    transition: all .3s ease-in-out;
    ${({ active }) => active ? showP : hideP}
`