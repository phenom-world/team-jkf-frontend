const Dotenv = require("dotenv-webpack");

module.export = {
  //   resolve: { fallback: { os: require.resolve("os-browserify/browser"), path: require.resolve("path-browserify") } },
  plugins: [
    new Dotenv({
      path: "./ config/.env", // load this now instead of the ones in '.env'
    }),
  ],
};
