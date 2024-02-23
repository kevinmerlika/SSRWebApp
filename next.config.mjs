/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
		serverActions: true,
	},
	async headers() {
		return [
			{
				source: "/api/stripe/test",
				headers: [
					{ key: "Access-Control-Allow-Credentials", value: "false" },
					{
						key: "Access-Control-Allow-Origin",
						value: "https://www.google.com/",
					},
					{
						key: "Access-Control-Allow-Methods",
						value: "GET,DELETE,PATCH,POST,PUT",
					},
					{
						key: "Access-Control-Allow-Headers",
						value: "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date",
					},
				],
			},
		];

      }
    }

export default nextConfig;
