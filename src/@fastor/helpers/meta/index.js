import Head from 'next/head'

export function Meta({ title, keywords, description, image, brand, url, domain }){
    return (
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="theme-color" content="#0066b2" />
            <meta name="description" content={description} />
            <meta name="author" content="Selta Digital" />
            <meta itemProp="name" content={brand} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content={image} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={brand} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:alt" content={brand} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content={domain} />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:site" content="" />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
            <meta property="twitter:image:alt" content={brand} />
            <title>{`${title} | ${"Fastor"}`}</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
        </Head>
    )
}

Meta.defaultProps = {
    brand: 'Fastor',
    title: 'Fastor UI',
    description: 'Fastor UI. Design UI faster and save time.',
    image: 'https://fastor.io/image.webp',
    domain: 'fastor.io',
    url: 'https://fastor.io',
}







