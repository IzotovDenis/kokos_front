const path = require("path");

module.exports = {
  webpack(config, options) {
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["modules"] = path.join(__dirname, "modules");
    config.resolve.alias["actions"] = path.join(__dirname, "actions");
    return config;
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    appHost:
      process.env.NODE_ENV === "production"
        ? "http://kokos.top"
        : "http://192.168.0.104:3000",
    appApi:
      process.env.NODE_ENV === "production"
        ? "http://api.kokos.top/v1"
        : "http://192.168.0.104:3000/v1",
    appDomain:
      process.env.NODE_ENV === "production"
        ? "http://kokos.top"
        : "http://lvh.me:3000",
    appCookieDomain:
      process.env.NODE_ENV === "production"
        ? ".kokos.top"
        : ".lvh.me"
  }
};
