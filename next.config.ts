import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
    images: {
        loader: "custom",
        loaderFile: "./image-loader.js",
    },
}
 
export default nextConfig