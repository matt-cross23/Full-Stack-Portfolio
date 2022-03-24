const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static("public"));

res.sendFile(path.join(__dirname, '../public', 'index.html'));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
