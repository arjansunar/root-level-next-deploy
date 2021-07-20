import Image from 'next/image'
import styled, { css } from 'styled-components'
// import Modal from 'react-modal'
import { useState } from 'react'
import Jd from './Modal'
import Modal from 'styled-react-modal'

function CareerCard({
    imagePath,
    jobTitle,
    experience,
    postDate, modalContent }) {

    const [isModalOpen, setModalOpen] = useState(false)

    function handleOpenModal() {
        setModalOpen(true)
    }
    function handleCloseModal() {
        setModalOpen(false)
    }
    const [opacity, setOpacity] = useState(0);

    function afterOpen() {
        setTimeout(() => {
            setOpacity(1);
        }, 100);
    }

    function beforeClose() {
        return new Promise((resolve) => {
            setOpacity(0);
            setTimeout(resolve, 300);
        });
    }
    return (
        <>
            <Wrapper>
                <TextWrapper>
                    <Image src={imagePath} alt={jobTitle} height='60px' width='60px' />
                    <JobTitle>{jobTitle}</JobTitle>
                    <Experience>{experience}</Experience>
                    <PostDate>{postDate}</PostDate>
                </TextWrapper>
                <ButtonWrapper>
                    <JDLink onClick={handleOpenModal}>job details</JDLink>
                    <CareerButton active lg poppins onClick={handleOpenModal}>apply</CareerButton>
                </ButtonWrapper>
            </Wrapper>
            <StyledModal
                isOpen={isModalOpen}
                onBackgroundClick={handleCloseModal}
                onEscapeKeydown={handleCloseModal}
                opacity={opacity}
                backgroundProps={{ opacity }}
                afterOpen={afterOpen}
                beforeClose={beforeClose}
            >
                <Jd content={modalContent} jobTitle={jobTitle} experience={experience} postDate={postDate} />

            </StyledModal>

        </>
    )
}



export default CareerCard
const Wrapper = styled.div`
    padding: 1.75rem 2.75rem 2.5rem 2.75rem; 
    box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.2);
    max-width: 380px;
    min-width: 300px;
    flex:1;
    /* height: 352px;  */
`
const TextWrapper = styled.div`

`
const JobTitle = styled.h3`
    margin-top: 1.5rem;

    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;

`
const sharedTextStyles = css`
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;

`
const Experience = styled.h4`
    margin-top: 1.5rem;
    ${sharedTextStyles}
`
const PostDate = styled.p`
    margin-top: 1rem;
    ${sharedTextStyles}
`

const ButtonWrapper = styled.div`
    margin-top: 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const JDLink = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    color: #008080;

    font-size: .875rem;
    font-weight: 600;
    line-height: 20px;
`

const buttonStyles = css`
    background: #008080;
    color: #F4FFFF;
`
export const CareerButton = styled.button`
    border: none;
    background-color: transparent;
    text-transform: uppercase;
    cursor: pointer;
    ${({ active }) => active ? buttonStyles : ''}
    padding: ${({ lg }) => (lg ? `8px 24px` : `8px 16px`)};
    border-radius: 6px;
    font-family: ${({ poppins }) => (poppins ? `'Poppins', sans-serif` : `'Montserrat', sans-serif`)};
    font-weight: ${({ poppins }) => (poppins ? `600` : `500`)};
    font-size: 14px;
`

const StyledModal = styled(Modal)`
  padding: 2rem;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
`