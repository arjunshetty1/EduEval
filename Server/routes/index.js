const express = require("express");
const router = express.Router();
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/paperdata", upload.single("file"), async function (req, res) {
  const { question, answerkey } = req.body;
  const file = req.file;
  console.log("Form client", question);
  console.log(answerkey);
  console.log(file);

  try {
    const imageData = fs.readFileSync(`./uploads/${file.filename}`);
    const response = await axios.post(
      "https://edueval-pyserver-o0my6mg1o-arjun-shetty.vercel.app/receive-image",
      {
        image: imageData,
        imageName: file.originalname,
      }
    );
    console.log("from fs", imageData);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  res.send("Data recived sucessfully");
});

module.exports = router;