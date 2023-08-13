import './globals.css'

import RootLayout from "@/pages/layout";

export default function App({Component, pageProps}) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    )
}