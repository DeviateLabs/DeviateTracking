const path = require("path");

let config = {
  entry: "./src/server/index.js",
  output: {
    filename: "deviatetracking.js",
    path: path.resolve(__dirname, "build"),
  },
  mode: "production",
};

if (process.env.SOURCE_MAP){
  config.devtool = "eval-source-map";
}

module.exports = config;
