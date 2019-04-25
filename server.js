const express = require("express");
const cors = require("cors");
const { port } = require("./config");
const api = require("./api");

const app = express();

app.use(cors());
app.use("/api", api);
app.use(express.static("public"));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is running on ${port}`));
