import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';

function HomeCarousel() {
    return (
        <StyledCarousel>
            <div>
                hello
            </div>
            <div>
                hello
            </div>
            <div>
                hello
            </div>
        </StyledCarousel>
    )
}

export default HomeCarousel

const StyledCarousel = styled(Carousel)`
    background-color: red;
`