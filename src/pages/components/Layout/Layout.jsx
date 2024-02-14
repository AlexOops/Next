import Link from "next/link";
import {useRouter} from "next/router";

export const Layout = ({children}) => {

    const router = useRouter();
    const vid = 123;

    const routerConfig = {
        my: {
            videos: "/my/videos",
            myVid: "/my/[vid]"
        }
    }

    return (
        <div>
            <Link href="/videos">Videos</Link>
            <Link href={routerConfig.my}>Videos</Link>
            <Link href={{pathname: routerConfig.my.myVid, query: {vid}}}>Videos</Link>

            <header>header</header>
            {children}
            <footer>footer</footer>

            <button onClick={() => router.push('/videos')}>go to videos</button>
        </div>
    );
};