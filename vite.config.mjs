import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	// depending on your application, base can also be "/"
	base: process.env.VITE_APP_BASE_NAME || "/",
	plugins: [react(), viteTsconfigPaths()],
	define: {
		global: "window",
	},
	resolve: {
		alias: [],
	},
	server: {
		// this ensures that the browser opens upon server start
		open: true,
		// this sets a default port to 3000
		port: 3000,
	},
});
