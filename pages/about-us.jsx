import Hero from "../components/HeroSection"
import { content } from '../content'
import Section from '../components/About/Section'
import { SectionsWrapper } from '../components/About/SectionElements'
import Head from "next/head";

const sectionData = [...content.aboutPage.sections];
const aboutContent = { ...content.aboutPage }

function About() {
    return (
        <div>
            <Head>
                <title>Rootlevel | About Us</title>
            </Head>
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
