import {useState} from "react";

export async function generateStaticParams() {
    const posts = await fetch('http://localhost:4200/posts')
        .then((res) => res.json())

    return posts.map((post) => ({
        posts: post,
    }))
}

const Videos = ({params}) => {

    const [posts, usePosts] = useState(params);

    console.log(posts)
    return (
        <div>
            My videos
        </div>
    );
};

export default Videos;