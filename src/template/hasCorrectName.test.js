const fs = require("fs");
const path = require("path");

it("template should be named correctly", () => {
  const file = path.join(__dirname, "../../template.tpl");
  const text = fs.readFileSync(file, "utf8");

  expect(text).toMatch("\"displayName\": \"Facebook Conversions API (CAPI) by Deviate Tracking\"");
});
