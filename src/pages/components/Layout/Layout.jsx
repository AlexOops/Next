import Link from "next/link";
import {useRouter} from "next/router";
import Head from "next/head";

export const Layout = ({children, title = 'VIDEOS'}) => {

    const router = useRouter();
    const vid = 123;

    const routerConfig = {
        my: {
            videos: "/my/videos",
            myVid: "/my/[vid]"
        }
    }

    return (
        <div className="wrapper">

            <Head>
                <title>{title}</title>
                <meta name="keywords" content="my videos i like my videos"/>
                <meta name="description" content="Check my videeos on youtube"/>

                <meta charSet="utf-8"/>
            </Head>

            <nav>
                <Link href="/">Main</Link>
                <Link href="/videos">Videos</Link>
                <Link href={routerConfig.my.videos}>My videos</Link>
                <Link href={{pathname: routerConfig.my.myVid, query: {vid}}}>My videos by ID</Link>

                <button onClick={() => router.push('/videos')}>go to videos</button>

            </nav>

            <main>
                {children}
            </main>

            <footer>footer</footer>


            <style jsx>
                {
                    `
                        .wrapper {
                            display: flex;
                            flex-direction: column;
                            min-height: 100vh;
                        }

                        nav {
                            display: flex;
                            align-items: center;
                            justify-content: space-around;
                            height: 40px;
                            width: 100%;
                            background-color: gray;
                        }

                        main {
                            flex: 1;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }

                        footer {
                            height: 40px;
                            background-color: gray;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    `
                }
            </style>

        </div>
    );
};