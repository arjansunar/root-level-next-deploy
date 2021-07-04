import {
    Wrapper,
    HeroSubtitle,
    HeroTitle
} from './HeroSectionElements'

function Hero({ image, title, subtitle, descrition, bg }) {
    return (
        <section>
            <Wrapper>
                <HeroTitle>
                    hello
                </HeroTitle>
                <HeroSubtitle>
                    subtitle
                </HeroSubtitle>
            </Wrapper>
        </section>
    )
}

export default Hero
