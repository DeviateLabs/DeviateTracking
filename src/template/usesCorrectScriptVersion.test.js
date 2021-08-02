const fs = require("fs");
const path = require("path");

it("template should use correct script version", () => {
  const file = path.join(__dirname, "../../template.tpl");
  const text = fs.readFileSync(file, "utf8");

  expect(text).toMatch("https://deviatetracking.com/wp-content/deviatetracking/deviatetracking.js?");
});
