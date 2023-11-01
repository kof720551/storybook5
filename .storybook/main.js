module.exports = {
  stories: ["../src/**/*.stories.js"],
  webpackFinal(config) {
    const isCssRule = rule =>
      rule.test && rule.test instanceof RegExp && rule.test.test("./file.css");

    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules.filter(rule => !isCssRule(rule)),
          {
            test: /\.css$/,
            oneOf: [
              {
                resourceQuery: /module/,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      modules: true
                    }
                  }
                ]
              },
              {
                use: ["style-loader", "css-loader"]
              }
            ]
          }
        ]
      }
    };
  }
};
