// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const axios = require("axios");
// const fs = require("fs");

// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "../uploads/");
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, file.originalname);
// //   },
// // });
// const upload = multer();

// router.post("/paperdata", upload.single("file"), async function (req, res) {
//   const { question, answerkey } = req.body;
//   const file = req.file;
//   console.log("Form client", question);
//   console.log(answerkey);
//   console.log(file);

//   try {
//     // const imageData = fs.readFileSync(`./uploads/${file.filename}`);
//     const response = await axios.post(
//       "https://edueval-pyserver-o0my6mg1o-arjun-shetty.vercel.app/receive-image",
//       {
//         image: file.buffer,
//         imageName: file.originalname,
//       }
//     );
//     // console.log("from fs", imageData);
//     console.log(response.data);
//     res.send({ message: "Data recived sucessfully", pyResponse: response });
//   } catch (error) {
//     console.log(error);
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const multer = require("multer");
const axios = require("axios");

const upload = multer();

router.post("/paperdata", upload.single("file"), async function (req, res) {
  const { question, answerkey } = req.body;
  const file = req.file;
  console.log("Form client", question);
  console.log(answerkey);
  console.log(file);

  try {
    const response = await axios.post(
      "https://edueval-pyserver-o0my6mg1o-arjun-shetty.vercel.app/receive-image",
      {
        image: file.buffer, // Directly pass the image buffer
        imageName: file.originalname,
      }
    );
    console.log(response.data); // Assuming the server responds with JSON data
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
