import Hero from "../components/HeroSection"
import { content } from '../content'

const aboutContent = { ...content.aboutPage }

function About() {
    return (
        <div>
            <Hero
                {...aboutContent.heroSection}
            />
        </div>
    )
}

export default About
