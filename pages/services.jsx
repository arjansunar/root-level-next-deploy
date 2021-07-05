import Hero from "../components/HeroSection"
import { content } from '../content'

const servicesContent = { ...content.servicesPage }

function Services() {
    return (
        <div>
            <Hero
                {...servicesContent.heroSection}
            />
        </div>
    )
}

export default Services
