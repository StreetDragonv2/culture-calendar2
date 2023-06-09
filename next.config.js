/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const isProduction = process.env.NODE_ENV === 'production';
//const runtimeCaching = require("next-pwa/cache.js"); 캐시코드

const config={
	experimental: {
		appDir: true,
	}
}
const nextConfig = withPWA({
	dest: "public",
	disable: !isProduction,
	runtimeCaching: [],
	//runtimeCaching: runtimeCaching, 캐시코드
})(config);

module.exports = nextConfig;