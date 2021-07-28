/* eslint-disable @next/next/no-img-element */
import {
    Wrapper,
    HeroSubtitle,
    HeroTitle,
    TextSection,
    HeroP,
    HeroPicWrapper
} from './HeroSectionElements'

function Hero({ imageProps, title, subtitle, description, bg, heroPic }) {
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
                        {description}
                    </HeroP>
                </TextSection>
                {heroPic ?
                    <HeroPicWrapper >
                        <img src={heroPic} alt=""/>
                    </HeroPicWrapper>
                    : ''}
            </Wrapper>
        </section>
    )
}

export default Hero
