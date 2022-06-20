/** @type {import('next').NextConfig} */

const domains = ["db3pap006files.storage.live.com" , "geekland.eu"];
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: domains
  },
  env: {
    URL_PAG: "http://localhost:3000" ,
    DOMAINS_NEXT_CONFIG: domains,
    ID_BASE_PAGE: "ed38ff95-d0fa-45f8-8c1a-37a5401974cc" //dev
    // ID_BASE_PAGE: "5f28676954394485a6db3de0b592a862" //dev
    // ID_BASE_PAGE: "523abbcb04c541349b2e039fa24c2518" //pro
  }
}
// import {imgUrls} from './pages/posts/[id]'🤠

module.exports = nextConfig;