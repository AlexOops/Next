import React from 'react';
import {useRouter} from "next/router";

const Post = () => {
    const {query} = useRouter();

    return (
        <div>
            post:  {query.title}
            <br/>
            views: {query.views}
        </div>
    );
};

export default Post;