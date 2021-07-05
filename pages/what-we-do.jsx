import Hero from '../components/HeroSection'
import { content } from '../content'

const whatWeDoContent = { ...content.whatWeDoPage }

function WhatWeDo() {
    return (
        <div>
            <Hero
                {...whatWeDoContent.heroSection}
            />
        </div>
    )
}

export default WhatWeDo
