import Hero from '../components/HeroSection'
import { content } from '../content'
import SectionInfo from '../components/What-we-do/SectionInfo'

const whatWeDoContent = { ...content.whatWeDoPage }

function WhatWeDo() {
    return (
        <div>
            <Hero
                {...whatWeDoContent.heroSection}
            />
            <SectionInfo
                title='How we work'
                desc='We work on a wide variety of software projects, we know each project will be different so we approach each project with an open mind and manage each piece of bespoke software in a way that suits the individual project.'
            />
        </div>
    )
}

export default WhatWeDo
