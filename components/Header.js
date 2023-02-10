import Head from 'next/head'

// Images
import Logo from './../public/images/logo/logo.png'

export default function Header({ title = 'Home', logo = Logo.src }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="shortcut icon" href={logo} />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
        </>
    )
}
