import Hero from "../components/HeroSection"
import { content } from '../content'
import CardWrapper from "../components/Services"
import Carousel from '../components/What-we-do/Carousel'
import ImageInfoSection from '../components/What-we-do/ImageInfoSection'
import SectionInfo from "../components/What-we-do/SectionInfo"


const servicesContent = { ...content.servicesPage }
const cardContent = [...servicesContent.cards]
const whatWeDoContent = { ...content.whatWeDoPage }

function Services() {
    return (
        <section>
            <Hero
                {...servicesContent.heroSection}
            />

            <CardWrapper cardContent={cardContent} />
            <SectionInfo
                title='How we work'
                desc='We work on a wide variety of software projects, we know each project will be different so we approach each project with an open mind and manage each piece of bespoke software in a way that suits the individual project.'
            />
            <Carousel>
                {whatWeDoContent.imageInfoSection.map((val, i) =>
                    <ImageInfoSection
                        {...val}
                        key={i}
                    />
                )}
            </Carousel>

        </section>
    )
}

export default Services
