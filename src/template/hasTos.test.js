const fs = require("fs");
const path = require("path");

it("has a terms of service section", () => {
  const file = path.join(__dirname, "../../template.tpl");
  const text = fs.readFileSync(file, "utf8");

  expect(text).toMatch("___TERMS_OF_SERVICE___");
});
