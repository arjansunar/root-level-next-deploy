import Head from 'next/head'
import CurrentOpeningsSection from '../components/Career/CurrentOpeningsSection'
import WhatWeOfferSection from '../components/Career/WhatWeOfferSection'
import Hero from '../components/HeroSection'
import { content } from '../content'


const careerContent = { ...content.careerPage }
function career() {
    return (
        <main>

            <Head>
                <title>Rootlevel | Career</title>
            </Head>
            <Hero {...careerContent.heroSection} />
            <WhatWeOfferSection
                sectionTitle='Are you passionate? Come work with us!'
                sectionSubtitle='At Rootlevel Nepal, we employ people with great passion!'
            />
            <CurrentOpeningsSection />
        </main>
    )
}

export default career
