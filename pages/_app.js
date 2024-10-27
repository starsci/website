import { ThemeProvider } from 'next-themes';
import './globals.css'

import RootLayout from "@/pages/layout";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </ThemeProvider>
    )
}