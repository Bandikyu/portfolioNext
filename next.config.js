/** @type {import('next').NextConfig} */

const domains = ["db3pap006files.storage.live.com" , "geekland.eu"];
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: domains
  },
  env: {
    DOMAINS_NEXT_CONFIG: domains
  }
}
// import {imgUrls} from './pages/posts/[id]'🤠

module.exports = nextConfig;