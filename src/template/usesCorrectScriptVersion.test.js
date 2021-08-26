const fs = require("fs");
const path = require("path");
const config = require("../server/config.js");

it("template should use correct script version", () => {
  const file = path.join(__dirname, "../../template.tpl");
  const text = fs.readFileSync(file, "utf8");

  let versionSliced = config.version.slice(0, config.version.lastIndexOf("."));

  expect(text).toMatch(`https://deviatetracking.com/wp-content/deviatetracking/deviatetracking-${versionSliced}.js?`);
});
