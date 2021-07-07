import Hero from "../components/HeroSection"
import { content } from '../content'
import Section from '../components/About/Section'
import { SectionsWrapper } from '../components/About/SectionElements'

const sectionData = [...content.aboutPage.sections];
const aboutContent = { ...content.aboutPage }

function About() {
    return (
        <div>
            <Hero
                {...aboutContent.heroSection}
            />
            <SectionsWrapper>

                {sectionData.map((section, i) =>
                    <Section key={i} {...section} />
                )}
            </SectionsWrapper>
        </div>
    )
}

export default About
