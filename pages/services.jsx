import Hero from "../components/HeroSection"
import { content } from '../content'
import Section from "../components/Services/Section"
import { Divider } from "../components/Services/SectionElements"

const servicesContent = { ...content.servicesPage }
const sectionData = [...servicesContent.sections]

function Services() {
    return (
        <div>
            <Hero
                {...servicesContent.heroSection}
            />

            <Divider />
            {sectionData.map((section, i) =>
                <Section key={i} {...section} />
            )}
        </div>
    )
}

export default Services
