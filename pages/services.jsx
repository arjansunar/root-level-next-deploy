import Hero from "../components/HeroSection"
import { content } from '../content'
import CardWrapper from "../components/Services"

const servicesContent = { ...content.servicesPage }
const cardContent = [...servicesContent.cards]
function Services() {
    return (
        <div>
            <Hero
                {...servicesContent.heroSection}
            />

            <CardWrapper cardContent={cardContent} />

        </div>
    )
}

export default Services
