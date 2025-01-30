import Fastify from "fastify";
import proxy from "@fastify/http-proxy";
import dotenv from "dotenv";

dotenv.config();

const server = Fastify({
	logger: true,
});

// Single proxy configuration
server.register(proxy, {
	upstream: process.env.TARGET_DNS || "https://target-dns.com",
	prefix: "/",
	rewritePrefix: "/",
	http2: false,
	// replyOptions: {
	// 	rewriteRequestHeaders: (originalReq, headers) => {
	// 		console.log(process.env.TARGET_DNS);
	// 		return {
	// 			...headers,
	// 			host: new URL(process.env.TARGET_DNS || "https://target-dns.com").host,
	// 		};
	// 	},
	// 	onResponse: (request, reply, res) => {
	// 		request.log.info(
	// 			{
	// 				method: request.method,
	// 				url: request.url,
	// 				statusCode: res.statusCode,
	// 			},
	// 			"proxied request"
	// 		);
	// 	},
	// },
});

const start = async () => {
	try {
		await server.listen({ port: Number(process.env.PORT) || 3945, host: "0.0.0.0" });
		console.log(`Proxy server running on port ${process.env.PORT || 3945}`);
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}
};

start();
