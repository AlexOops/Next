import React from 'react';
import {useRouter} from "next/router";

const MyVideoId = () => {
    const {query} = useRouter();

    return (
        <div>
            video: {query.vid}
        </div>
    );
};

export default MyVideoId;