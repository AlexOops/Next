import "@/styles/globals.css";
import {Layout} from "@/pages/components/Layout/Layout";

export default function App({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
