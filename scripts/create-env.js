const fs = require("fs");

fs.writeFileSync(
  "./.env",
  `REACT_APP_GITHUB_KEY=${process.env.REACT_APP_GITHUB_KEY}`
);
