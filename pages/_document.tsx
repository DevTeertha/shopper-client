import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Shopper</title>
            </Head>
            <body className="bg-gray-100">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}