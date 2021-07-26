import Head from 'next/head'
import Hero from '../components/HeroSection'
import IconCards from '../components/Home/IconCards'
import PartnerSection from '../components/Home/PartnerSection'
import Testimonials from '../components/Home/Testimonials'
import { content } from '../content'
import InfoCard from '../components/What-we-do/InfoCard'
import styled from 'styled-components'
import SectionInfo from '../components/What-we-do/SectionInfo'
import { Spacer } from '../components/What-we-do/Carousel'

const homeContent = { ...content.homePage }
const iconCardContent = [...homeContent.cardContent]

export default function Home() {
  return (
    <div>

      <Head>
        <title>Rootlevel</title>
      </Head>
      <Hero
        {...homeContent.heroSection}
      // imageProps={{ imageURL: "https://images.unsplash.com/photo-1517339461380-928f5f4def9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" }}
      />

      <SectionIconWrapper>
        <SectionInfo
          title='We are the solution to your problem'
          desc='The pillars of our team are nimble, problem-solving, out-of-the-box thinkers. We credit our delivery quality and result-oriented solutions to our team’s dedicated efforts and wholesome loyalty. It’s because of the efficacy of our teams that we have been able to form deep-rooted partnerships with clients.'
        />
        <CardGridWrapper>
          <InfoCard
            iconPath='/assets/user-centric.svg'
            title='User Centric'
            desc=" Software users' are always kept at the center of the product design and development, focusing on the end users' utility. Our products are developed, taking into account, the user's objectives, needs and feedback."

          />
          <InfoCard
            iconPath='/assets/innovative.svg'
            title='Innovation Driven'
            desc="Innovation resides in our heart. It's what makes or breaks a company. Through relentless experimentation and iteration, we advance the existing frameworks of innovation models.."

          />
          <InfoCard
            iconPath='/assets/engineering.svg'
            title='Excellent Engineering'
            desc="Our Excellency in Engineering is identified from key aspects of Craftsmanship, effectiveness, productivity, satisfaction. Our team of engineers all-equipped with the modern skills are devoted towards building the products right.
            "

          />
        </CardGridWrapper>

      </SectionIconWrapper>
      <IconCards cardContent={iconCardContent} />
      <PartnerSection />

      <Testimonials />
      <Spacer height='6rem' />

    </div>
  )
}

const SectionIconWrapper = styled.div`
    background: #35B5AC1F;
    padding: .5rem 5rem;

`
const CardGridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: flex-start;
    grid-column-gap: 8%;
    margin: 3rem auto 5rem auto;
    max-width: 1080px;
    @media screen and (max-width: 860px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`