const express = require("express");
const router = express.Router();
const multer = require("multer");
const axios = require("axios");

const upload = multer();

router.post("/paperdata", upload.single("file"), async function (req, res) {
  const { question, answerkey } = req.body;
  const file = req.file;

  try {
    const response = await axios.post(
      // "https://edueval-pyserver.vercel.app/receive-image",
      "https://flask-demo1-gules.vercel.app/receive-image",
      {
        image: file.buffer, // Pass the image buffer directly
        imageName: file.originalname,
        question: question,
        answerkey: answerkey,
      }
    );
    console.log(response.data);
    res.send({
      message: "Data received successfully",
      pyResponse: response.data,
    });
  } catch (error) {
    console.error("Error sending image:", error);
    res.status(500).send("Error sending image to server");
  }
});

module.exports = router;
