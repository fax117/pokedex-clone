/** @type {import('next').NextConfig}  */ 
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["https://pokeapi.co/", "https://raw.githubusercontent.com"],
    loader: "custom",
    path:"/",
  }
}

module.exports = nextConfig
