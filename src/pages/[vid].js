import React from 'react';
import {useRouter} from "next/router";

//динамические с 1 параметром

const Video = () => {
    const {query} = useRouter();

    return (
        <div>
            video: {query.vid}
        </div>
    );
};

export default Video;