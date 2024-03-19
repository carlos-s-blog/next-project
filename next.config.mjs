/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: "https",
                hostname: "images.pixabay.com"
            },
            {
                protocol: "https",
                hostname: "cdn.pixabay.com"
            },
            {
                protocol: "https",
                hostname: "t7.baidu.com"
            },
            {
                protocol:"https",
                hostname: "avatars.githubusercontent.com"
            }
        ]
    }
};

export default nextConfig;
