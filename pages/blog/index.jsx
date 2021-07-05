import Hero from "../../components/HeroSection"
import { content } from '../../content'

const blogContent = { ...content.blogPage }

function index() {

    return (
        <div>
            <Hero
                {...blogContent.heroSection}
            />
        </div>
    )
}

export default index
