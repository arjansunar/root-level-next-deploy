import Hero from "../../components/HeroSection"
import { content } from '../../content'
import BlogCard from "../../components/Blog/BlogCard"
import { GridContainer, FlexContainer } from "../../components/utilityStyles"
import { sanityClient } from "../../lib/sanity";

const blogContent = { ...content.blogPage }

const blogs = [
    {
        imageURL: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title: '20+ Best React UI Component Libraries',
        date: 'Jan, 2021',
        noOfComments: '20',
        likes: '9',
        category: 'Programming',
        excerpt: 'React is an open-source JavaScript library that helps you build a top interface for both the web as well as mobile apps. It combines conveniently with other JavaScript frameworks and libraries, and contains tiny, standalone bits of code called components.'
    },
    {
        imageURL: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title: '20+ Best React UI Component Libraries',
        date: 'Jan, 2021',
        noOfComments: '20',
        likes: '9',
        category: 'Programming',
        excerpt: 'React is an open-source JavaScript library that helps you build a top interface for both the web as well as mobile apps. It combines conveniently with other JavaScript frameworks and libraries, and contains tiny, standalone bits of code called components.'
    },
    {
        imageURL: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title: '20+ Best React UI Component Libraries',
        date: 'Jan, 2021',
        noOfComments: '20',
        likes: '9',
        category: 'Programming',
        excerpt: 'React is an open-source JavaScript library that helps you build a top interface for both the web as well as mobile apps. It combines conveniently with other JavaScript frameworks and libraries, and contains tiny, standalone bits of code called components.'
    },
    {
        imageURL: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title: '20+ Best React UI Component Libraries',
        date: 'Jan, 2021',
        noOfComments: '20',
        likes: '9',
        category: 'Programming',
        excerpt: 'React is an open-source JavaScript library that helps you build a top interface for both the web as well as mobile apps. It combines conveniently with other JavaScript frameworks and libraries, and contains tiny, standalone bits of code called components.'
    },
    {
        imageURL: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title: '20+ Best React UI Component Libraries',
        date: 'Jan, 2021',
        noOfComments: '20',
        likes: '9',
        category: 'Programming',
        excerpt: 'React is an open-source JavaScript library that helps you build a top interface for both the web as well as mobile apps. It combines conveniently with other JavaScript frameworks and libraries, and contains tiny, standalone bits of code called components.'
    },
    {
        imageURL: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        title: '20+ Best React UI Component Libraries',
        date: 'Jan, 2021',
        noOfComments: '20',
        likes: '9',
        category: 'Programming',
        excerpt: 'React is an open-source JavaScript library that helps you build a top interface for both the web as well as mobile apps. It combines conveniently with other JavaScript frameworks and libraries, and contains tiny, standalone bits of code called components.'
    },

]

function index({ posts: blogs }) {
    // console.log("posts", posts)
    return (
        <div>
            <Hero
                {...blogContent.heroSection}
            />
            <FlexContainer>
                {/* <GridContainer>
                    {blogs.map((props, index) =>
                        <BlogCard key={index} {...props} />
                    )}
                </GridContainer> */}
                <GridContainer>
                    {blogs.map((props, index) =>
                        <BlogCard key={index} {...props} />
                    )}
                </GridContainer>
            </FlexContainer>
        </div>
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
    // console.log(posts)
    const { _id,
        title,
        slug,
        mainImage: imageURL,
        excerpt } = posts

    return { props: { posts } };
}
