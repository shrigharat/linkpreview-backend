const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getLinkPreview, getPreviewFromContent } = require("link-preview-js");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser({ extended: true }));

app.get("/parse-link", async (req, res) => {
  const { link } = req.query;
  console.log("Recieved request for link -> ");
  console.log(link);
  try {
    const data = await getLinkPreview(link);
    res.json(data);
  } catch (e) {
    res.sendStatus(400);
  }
});

app.listen(PORT, () => {
  console.log("Server running...");
});
