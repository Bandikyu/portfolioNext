/** @type {import('next').NextConfig} */

const domains = ["db3pap006files.storage.live.com", "geekland.eu"];
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: domains,
  },
  env: {
    DOMAINS_NEXT_CONFIG: domains,
    //ID_BASE_PAGE: "5f28676954394485a6db3de0b592a862", //dev
    ID_BASE_PAGE: "523abbcb04c541349b2e039fa24c2518" //pro
  },
};

module.exports = nextConfig;
