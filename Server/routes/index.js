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
  const [result] = await client.textDetection(image);
  console.log("Image to Text:", result.fullTextAnnotation.text);
  const text = result.fullTextAnnotation.text;
  return text;
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
    const fileBuffer1 = req.files.file1[0].buffer;
    const fileBuffer2 = req.files.file2[0].buffer;
    const fileBuffer3 = req.files.file3[0].buffer;
    const fileBuffer4 = req.files.file4[0].buffer;
    const fileBuffer5 = req.files.file5[0].buffer;
    const fileBuffer6 = req.files.file6[0].buffer;
    const fileBuffer7 = req.files.file7[0].buffer;
    const fileBuffer8 = req.files.file8[0].buffer;
    const fileBuffer9 = req.files.file9[0].buffer;
    const fileBuffer10 = req.files.file10[0].buffer;
    const fileBuffer11 = req.files.file11[0].buffer;
    const fileBuffer12 = req.files.file12[0].buffer;

    const answerkey1 = req.body.answerkey1;
    const answerkey2 = req.body.answerkey2;
    const answerkey3 = req.body.answerkey3;
    const answerkey4 = req.body.answerkey4;
    const answerkey5 = req.body.answerkey5;
    const answerkey6 = req.body.answerkey6;
    const answerkey7 = req.body.answerkey7;
    const answerkey8 = req.body.answerkey8;
    const answerkey9 = req.body.answerkey9;
    const answerkey10 = req.body.answerkey10;
    const answerkey11 = req.body.answerkey11;
    const answerkey12 = req.body.answerkey12;

    try {
      const text1 = await ImagetoText(fileBuffer1);
      const text2 = await ImagetoText(fileBuffer2);
      const text3 = await ImagetoText(fileBuffer3);
      const text4 = await ImagetoText(fileBuffer4);
      const text5 = await ImagetoText(fileBuffer5);
      const text6 = await ImagetoText(fileBuffer6);
      const text7 = await ImagetoText(fileBuffer7);
      const text8 = await ImagetoText(fileBuffer8);
      const text9 = await ImagetoText(fileBuffer9);
      const text10 = await ImagetoText(fileBuffer10);
      const text11 = await ImagetoText(fileBuffer11);
      const text12 = await ImagetoText(fileBuffer12);

      console.log("answers are", req.body);

      console.log(text1);
      console.log(text2);

      const response = await axios.post(
        // "https://edueval-pyserver-7et4nqd90-arjun-shetty.vercel.app/receive-image",
        "http://localhost:3002/receive-image",
        // "https://flask-demo111.vercel.app/receive-image",
        {
          answerkey1: answerkey1,
          answerkey2: answerkey2,
          answerkey3: answerkey3,
          answerkey4: answerkey4,
          answerkey5: answerkey5,
          answerkey6: answerkey6,
          answerkey7: answerkey7,
          answerkey8: answerkey8,
          answerkey9: answerkey9,
          answerkey10: answerkey10,
          answerkey11: answerkey11,
          answerkey12: answerkey12,

          answersheet1: text1,
          answersheet2: text2,
          answersheet3: text3,
          answersheet4: text4,
          answersheet5: text5,
          answersheet6: text6,
          answersheet7: text7,
          answersheet8: text8,
          answersheet9: text9,
          answersheet10: text10,
          answersheet11: text11,
          answersheet12: text12,
        }
      );

      res.send({
        message: "Data received successfully",
        // Text: response.data.replace(/\n/g, " "),
        Text: response.data,
      });
    } catch (error) {
      console.error("Error sending image:", error);
      res.status(500).send("Error sending image to server");
    }
  }
);

module.exports = router;
