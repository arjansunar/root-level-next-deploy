import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled, { css } from 'styled-components';
import Image from 'next/image'

function HomeCarousel({ children }) {
    return (
        <StyledCarousel setThumbs={false} showStatus={false}

            renderArrowPrev={(onClickHandler, hasPrev, label) => (
                hasPrev && <PrevButton onClick={onClickHandler} title={label} >
                    <Image src='/assets/home/buttonPrev.svg' width='10px' height='20px' alt='' />
                </PrevButton>
            )
            }

            renderArrowNext={(onClickHandler, hasPrev, label) => (
                hasPrev && <NextButton onClick={onClickHandler} title={label} >
                    <Image src='/assets/home/buttonPrev.svg' width='10px' height='20px' alt='' />
                </NextButton>
            )}
            renderIndicator={(onClickHandler, isSelected, index, label) =>
                <Indicator onClick={onClickHandler} active={isSelected} title={`Selected: ${label} ${index + 1}`} aria-label={`Selected: ${label} ${index + 1}`} />
            }
        >
            {children}
        </StyledCarousel >
    )
}

export default HomeCarousel

const StyledCarousel = styled(Carousel)`
    position: relative;
`

const sharedButtonStyles = css`
    padding: 14px 19px;
    background: #fff;
    z-index: 2;
    border: 1.5px solid #A1A4A4;
    cursor: pointer;
    position: absolute;
    top: 40%;
`
const PrevButton = styled.button`
    ${sharedButtonStyles}
    left: 1rem;

`
const NextButton = styled.button`
    ${sharedButtonStyles}
    right:1rem;

    & img{
        transform: rotate(-180deg);
    }
`
const Indicator = styled.div`
    height: 12px;
    width: 12px;
    display: inline-block;
    margin-right: 12px;
    border-radius: 50%;
    background: ${({ active }) => (active ? '#35B5AC' : '#35B5AC80')};
    cursor: pointer;
`