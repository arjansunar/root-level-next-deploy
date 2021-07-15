/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { MainImage, PostContent, PostHeadSection, PostInfo, PostWrapper, Title, ShareButtonWrapper, SectionWrapper, LikeButton, ButtonContainer } from "../../components/Blog/PostElements";
import { PortableText, sanityClient, urlFor } from "../../lib/sanity";

import { AiOutlineHeart as OutlinedHeart, AiFillHeart as FilledHeart } from "react-icons/ai"

function Post({ data }) {
    const [likes, setLikes] = useState(data?.post?.likes);
    const addLike = async () => {
        const res = await fetch("/api/handle-like", {
            method: "POST",
            body: JSON.stringify({ _id: data.post._id }),
        }).catch((error) => console.log(error));

        const returnedData = await res.json();

        setLikes(returnedData.likes);
    };
    if (!data) return <div>Loading...</div>;
    // console.log("posts", data)
    return (
        <SectionWrapper>
            <ShareButtonWrapper>
                <ButtonContainer>

                    <LikeButton>
                        <span>
                            {likes}
                        </span>
                        <OutlinedHeart />
                    </LikeButton>
                </ButtonContainer>

            </ShareButtonWrapper>

            <PostWrapper className="recipe">

                <PostHeadSection>
                    <PostInfo>
                        JULY 13, 2021
                    </PostInfo>
                    <Title>{data.post.title}</Title>

                </PostHeadSection>

                {/* <button className="like-button" onClick={addLike}>
                {likes} ❤️
            </button> */}

                <PostContent className="content">
                    <MainImage src={urlFor(data.post?.mainImage).url()} alt={data.post.title} width="820px" height="480px" />
                    <PortableText blocks={data.post.body} />
                </PostContent>
            </PostWrapper>
        </SectionWrapper>
    )
}

export default Post

export async function getStaticPaths() {
    const paths = await sanityClient.fetch(
        `*[_type == "post" && defined(slug.current)]{
        "params": {
          "slug": slug.current
        }
      }`
    );
    return {
        paths,
        fallback: true,
    };
}

const postQuery = `
*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  mainImage,
  publishedAt,
  slug,
  body,
  likes
}
`
export async function getStaticProps({ params }) {
    const { slug } = params;
    const post = await sanityClient.fetch(postQuery, { slug });
    return { props: { data: { post } } };
}
