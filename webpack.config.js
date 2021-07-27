const path = require("path");

module.exports = {
  entry: "./src/server/index.js",
  output: {
    filename: "deviatetracking.js",
    path: path.resolve(__dirname, "build"),
  },
};
