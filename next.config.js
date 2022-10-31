/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    compiler: {
        styledComponents: true | {
            displayName: true,
            ssr: true,
        },
    },
}

module.exports = nextConfig