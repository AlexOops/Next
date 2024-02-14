import React from 'react';
import {useRouter} from "next/router";

// динамический с множеством ОПЦИОНАЛЬНЫХ параметров

const NewVideos = () => {
    const {query} = useRouter();

    return (
        <div>
            NewVideos: {query.vid?.join(', ')}
        </div>
    );
};

export default NewVideos;