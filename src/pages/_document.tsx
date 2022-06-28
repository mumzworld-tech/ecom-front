import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link
                        rel='preload'
                        href='/fonts/Open_Sans/OpenSans-SemiBold.ttf'
                        as='font'
                        type='font/ttf'
                        crossOrigin='anonymous'
                    />
                    <link
                        rel='preload'
                        href='/fonts/Open_Sans/OpenSans-Bold.ttf'
                        as='font'
                        type='font/ttf'
                        crossOrigin='anonymous'
                    />
                    <meta charSet='utf-8' />
                    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                    <meta name='theme-color' content='#0070BE' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
