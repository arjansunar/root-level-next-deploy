import Hero from "../../components/HeroSection"
import { content } from '../../content'
import BlogCard from "../../components/Blog/BlogCard"
import { GridContainer, FlexContainer, DefaultMarginedContainer } from "../../components/utilityStyles"
import { sanityClient } from "../../lib/sanity";
import { Spacer } from "../../components/What-we-do/Carousel";
import Head from "next/head";

const blogContent = { ...content.blogPage }

function index({ posts: blogs }) {
    return (
        <>
            <Head>
                <title>Rootlevel | Blog</title>
            </Head>
            <Hero
                {...blogContent.heroSection}
            />
            <DefaultMarginedContainer top="5rem">
                <FlexContainer>
                    <GridContainer>
                        {blogs.map((props, index) =>
                            <BlogCard key={index} {...props} />
                        )}
                    </GridContainer>
                </FlexContainer>
            </DefaultMarginedContainer>
            <Spacer height='3rem' />
        </>
    )
}


export default index

//query 
const postQuery = `*[_type == "post"]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    likes
  }`;

export async function getStaticProps() {
    const posts = await sanityClient.fetch(postQuery);
    const { _id,
        title,
        slug,
        mainImage: imageURL,
        excerpt } = posts

    return { props: { posts } };
}
