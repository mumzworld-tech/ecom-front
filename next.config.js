/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ['src'],
    },
    reactStrictMode: true,

    // SVGR
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        typescript: true,
                        icon: true,
                        replaceAttrValues: { '#555': '{props.color}' },
                    },
                },
            ],
        });

        return config;
    },
};

module.exports = nextConfig;
