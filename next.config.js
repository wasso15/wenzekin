/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
module.exports = {
	images: {
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: 'cdn.sanity.io',
		  port: '3333',
		  pathname: '',
		},
	  ],
	},
  }