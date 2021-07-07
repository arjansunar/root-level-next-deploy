/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { PortableText, sanityClient, urlFor, usePreviewSubscription } from "../../lib/sanity";

function Post({ data, preview }) {

    const { data: post } = usePreviewSubscription(postQuery, {

        params: { slug: data.post?.slug.current },
        initialData: data,
        enabled: preview,
    });

    const [likes, setLikes] = useState(data?.post?.likes);
    const addLike = async () => {
        const res = await fetch("/api/handle-like", {
            method: "POST",
            body: JSON.stringify({ _id: post.post._id }),
        }).catch((error) => console.log(error));

        const data = await res.json();

        setLikes(data.likes);
    };
    if (!data) return <div>Loading...</div>;

    return (
        <article className="recipe">
            <h1>{post.post.title}</h1>

            <button className="like-button" onClick={addLike}>
                {likes} ❤️
            </button>

            <main className="content">
                <img src={urlFor(post.post?.mainImage).url()} alt={post.post.title} />
                <PortableText blocks={post.post.body} />
            </main>
        </article>
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
    return { props: { data: { post }, preview: true } };
}
