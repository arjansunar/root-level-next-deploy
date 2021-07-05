import {
    Wrapper,
    HeroSubtitle,
    HeroTitle,
    TextSection,
    HeroP
} from './HeroSectionElements'

function Hero({ imageProps, title, subtitle, descrition, bg }) {
    // const imageProps = {
    //     imageURL: image1,
    //     overlay: '#28367B'
    // }
    return (
        <section>
            <Wrapper imageProps={imageProps} bg={bg} >
                {/* <img src={imageProps.imageURL} /> */}
                <TextSection>
                    <HeroTitle>
                        {title}
                    </HeroTitle>
                    <HeroSubtitle>
                        {subtitle}
                    </HeroSubtitle>
                    <HeroP>
                        {descrition}
                    </HeroP>
                </TextSection>
            </Wrapper>
        </section>
    )
}

export default Hero
