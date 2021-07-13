import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';

function HomeCarousel({ children }) {
    return (
        <StyledCarousel>
            {children}
        </StyledCarousel>
    )
}

export default HomeCarousel

const StyledCarousel = styled(Carousel)`
    /* background-color: red; */
`