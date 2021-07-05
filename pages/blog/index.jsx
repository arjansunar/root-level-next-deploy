import Hero from "../../components/HeroSection"
import { content } from '../../content'
import BlogCard from "../../components/Blog/BlogCard"
const blogContent = { ...content.blogPage }

function index() {

    return (
        <div>
            <Hero
                {...blogContent.heroSection}
            />
            <div style={{ height: '100vh' }}>
                <BlogCard
                    imageURL='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                    title='20+ Best React UI Component Libraries    '
                    date='Jan, 2021'
                    noOfComments='20'
                    likes='9'
                    category='Programming'
                    excerpt='React is an open-source JavaScript library that helps you build a top interface for both the web as well as mobile apps. It combines conveniently with other JavaScript frameworks and libraries, and contains tiny, standalone bits of code called components.'
                />
            </div>
        </div>
    )
}

export default index
