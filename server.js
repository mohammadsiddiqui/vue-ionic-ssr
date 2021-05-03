const express = require("express");

const { renderToString } = require("@vue/server-renderer");
const manifest = require("./dist/server/ssr-manifest.json");

const path = require("path");
const fs = require("fs");
const appPath = path.join(__dirname, "./dist/server", manifest["app.js"]);
const createApp = require(appPath).default;

const server = express();

server.use("/assets", express.static(path.join(__dirname, "./dist/client", "assets")));
server.use("/js", express.static(path.join(__dirname, "./dist/client", "js")));
server.use("/css", express.static(path.join(__dirname, "./dist/client", "css")));

// server.use("/img", express.static(path.join(__dirname, "./dist/client", "img")));
server.use("/favicon.ico", express.static(path.join(__dirname, "./dist/client/assets", "favicon.png")));

//all paths
server.get("*", async (req, res) => {
	const { app, router } = createApp();
	router.push(req.url);
	await router.isReady();

	const appContent = await renderToString(app);

	fs.readFile(path.join(__dirname, "/dist/client/index.html"), (err, html) => {
		if (err) throw err;
		html = html.toString().replace('<div id="app">', `<div id="app">${appContent}`);
		res.setHeader("Content-Type", "text/html");
		res.send(html);
	});
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`application running : http://localhost:${PORT}`));
