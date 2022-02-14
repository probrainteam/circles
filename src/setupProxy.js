const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://121.183.241.121:5678",
      changeOrigin: true,
    })
  );
};
