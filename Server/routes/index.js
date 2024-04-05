const express = require("express");
const router = express.Router();
const multer = require("multer");
const axios = require("axios");
const vision = require("@google-cloud/vision");
const fs = require("fs");

const credentialsFile = fs.readFileSync("edueval-caca51a88a30.json", "utf-8");
const CREDENTIALS = JSON.parse(credentialsFile);
//git testing 2
const CONFIG = {
  credentials: {
    private_key: CREDENTIALS.private_key,
    client_email: CREDENTIALS.client_email,
  },
};

const client = new vision.ImageAnnotatorClient(CONFIG);
const upload = multer();

const ImagetoText = async (image) => {
  try {
    const [result] = await client.textDetection(image);
    console.log("Image to Text:", result.fullTextAnnotation.text);
    const text = result.fullTextAnnotation.text;
    return text;
  } catch (error) {
    console.log("Error with the uploaded image", error);
  }
};

router.post(
  "/paperdata",
  upload.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
    { name: "file4" },
    { name: "file5" },
    { name: "file6" },
    { name: "file7" },
    { name: "file8" },
    { name: "file9" },
    { name: "file10" },
    { name: "file11" },
    { name: "file12" },
  ]),
  async function (req, res) {
    try {
      const formData = req.body;
      const requestData = {};
      const usn = req.body.usn;

      for (let i = 1; i <= 12; i++) {
        const answerKey = formData[`answerkey${i}`];
        const file = req.files[`file${i}`];

        if (answerKey && file) {
          const fileBuffer = file[0].buffer;
          const text = await ImagetoText(fileBuffer);
          console.log("Extracted Data", text);
          var ImageIsEmpty = false;
          if (text == undefined) {
            ImageIsEmpty = true;
          } else {
            requestData[`answerkey${i}`] = answerKey;
            requestData[`answersheet${i}`] = text;
          }
        }
      }

      const response = await axios.post("http://127.0.0.1:5000/receive-image", {
        requestData,
        usn,
      });

      if (ImageIsEmpty == true) {
        res.send("You are dumb! Empty Image with no text");
      } else {
        res.send({
          message: "Data received successfully",
          FlaskServerResponse: response.data,
        });
      }

      console.log("Flask Server Response", response.data);
      console.log("the scores", response.data.similarity_scores["1"]);
    } catch (error) {
      console.error("Error sending image:", error);
      res.status(500).send("Error sending image to server");
    }
  }
);

module.exports = router;
