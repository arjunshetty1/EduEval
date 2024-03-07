const express = require("express");
const router = express.Router();
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
    // console.log("this is multer dest");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
    // console.log("this is multer fileName");
  },
});
const upload = multer({ storage: storage });

router.post("/paperdata", upload.single("file"), async function (req, res) {
  const { question, answerkey } = req.body;
  const file = req.file;
  // console.log(file);

  try {
    const imageData = fs.readFileSync(`./uploads/${file.filename}`);

    // const formdata = new FormData();
    // formdata.append("question", question);
    // formdata.append("answerkey", answerkey);
    // formdata.append("file", file);

    // Read image file
    const response = await axios.post("http://localhost:3002/receive-image", {
      image: imageData,
      imageName: file.originalname,
    });
    // console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
  res.send("Data recived sucessfully");
});

module.exports = router;
