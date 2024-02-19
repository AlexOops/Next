import {useState} from "react";
import s from "../../styles/myVideos.module.scss";
import Link from "next/link";

const Posts = ({props}) => {

    const [posts, setPosts] = useState(props);
    console.log(process.env.API_URL)
    return (
        <div>
            MY POSTS

            <div className={s.posts}>
                {
                    posts?.map((post) => {
                        return (
                            <div
                                className={s.post}
                                key={post.id}>

                                <Link href={{pathname: `/my/post/[postid]`, query: {postid: post.id, ...post}}}>
                                    {post.id}. {post.title}
                                </Link>

                            </div>)
                    })

                }
            </div>
        </div>
    );
};

export default Posts;


export async function getServerSideProps() {

    const res = await fetch(`${process.env.API_URL}/posts`)

    const props = await res.json()

    return {props: {props}}
}
