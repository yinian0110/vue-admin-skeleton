module.exports = {
  // don't need source maps for production
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .loader("eslint-loader")
      .tap(options => {
        options.fix = true;
        options.enforce = "pre";
        return options;
      });
  }
};
