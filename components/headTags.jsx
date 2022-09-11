import Head from 'next/head'


export default function HeadTags(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description}></meta>
            <meta property="og:title" content={props.title}></meta>
            <meta name="og:description" content={props.title}></meta>
            <meta name="twitter:title" content={props.description}></meta>
            <meta name="twitter:title" content={props.description}></meta>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="author" content="Bruno Ripoll" />
            <meta name="copyright" content="Bruno Ripoll" />
            {/* <meta name="Resource-type" content="Homepage"></meta> */}
        </Head>

    )
}
