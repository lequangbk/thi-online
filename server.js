const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());

// nơi lưu video
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
  console.log("Nhận file:", req.file);

  res.send("Upload thành công");
});

app.listen(3000, () => {
  console.log("Server chạy tại http://localhost:3000");
});