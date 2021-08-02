import Hero from "../components/HeroSection";
import { content } from "../content";
import CardWrapper from "../components/Services";
import Carousel from "../components/What-we-do/Carousel";
import ImageInfoSection from "../components/What-we-do/ImageInfoSection";
import SectionInfo from "../components/What-we-do/SectionInfo";
import Head from "next/head";

const servicesContent = { ...content.servicesPage };
const cardContent = [...servicesContent.cards];
const imageInfoContent = [...servicesContent.imageInfoSection];

function Services() {
  return (
    <section>
      <Head>
        <title>Rootlevel | Services</title>
      </Head>
      <Hero {...servicesContent.heroSection} />

      <CardWrapper cardContent={cardContent} />
      <SectionInfo
        title="How we work"
        desc="We work on a wide variety of software projects, we know each project will be different so we approach each project with an open mind and manage each piece of bespoke software in a way that suits the individual project."
      />
      <Carousel>
        {imageInfoContent.map((val, i) => (
          <ImageInfoSection {...val} key={i} />
        ))}
      </Carousel>
    </section>
  );
}

export default Services;
