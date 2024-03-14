const express = require("express");
const router = express.Router();
const multer = require("multer");
const axios = require("axios");
const vision = require("@google-cloud/vision");

const CREDENTIALS = JSON.parse(
  JSON.stringify({
    type: "service_account",
    project_id: "edueval",
    private_key_id: "caca51a88a3002a9559f8b67e4d2869aa09d7f3d",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCvZGXYhaMfi6ia\nmpqvDZyForK8bFULoUGOnTeQXs/MKNdk1RhIuuvLILJ6b8tKq3leFzczH7FA1mqC\nDY33gM1DNRYlXoehA72GBFMHf5abENkPPChHpg7Vh8+6aNHMSrD8yYqofM/z67Jh\nbYFnuosy/Z/o96iCeG9w3t/h+c90K0X4Ge0OJuTlOYiFuYHWo/Zntdhk+YXyx5kj\nDNBGtV/9XmS2kiXqccRSxFjxXreB7FA+xpQnAGb/kUcBAF58DkTUfezRqO7zzQRx\niuc5OeT/wdk9WxjLc3lIdhuq/LeK3K+ZckDhXN11jlSsKJXKl7mQtyVZZb/a+Evg\n2+aBGEvPAgMBAAECggEAPPhLpy8de5PS8puX9g5nQNVECNgn4DkYTvk8HYW3+qKf\n7b9eB7piyWP+Zy2Bn91n/VtYpv73YTCoKbmIhmdR83D619a6kzB3q6TJMCwcMJ90\ntSUWY4HIWlYx0f0qITg9ukJdXyC0MXjXs6Kbf3GLfhhIhHXDMEephbUUYruycBEf\nUYsRioFavjHFmNKC5dC9I9SPzdAIwxloIVR6FOfpsCKqSbU5D2bepJsps3IcgmTW\nzbVfYViWsO32utvy2ebW9bHEANTrhU2+IrEPzdtzXxu/02+iGLqAhaYnUip+77Oj\nMF7urS0kuumDdzwJAEXesOeJHwHGyKPC3iMbi9560QKBgQDhXlw+X+/riVOwTZeM\ny99Pk85evjAA0sitFVAnEuO20f8gV75OozeESIfyqeZ2H5ImnyWt24ouIqrLNMao\nwm9cLLTAcNhtL55VI8OAA0yDzM4uo/gMfxczIMg+UmPN5xVvB7pTxgVuqmVAvuDX\nQl8NRAtNOi8hCd4tQG0KmZTOPQKBgQDHOx8d7lhbMV8X8tJs3n+rKKgUms94GZD9\nDuBVZ3yLqSHL1rstruw+KHcqT+CI4/GlRMl/ZrkU3Xovjp3sleQHXweb9EzZ1sbL\nWKpQ/wJshQOLgSTHNaHzlZGgZLC4+0kBpGpVp3IcPxP4elT6jm/V6ZTUp6RoW5/6\nyDCK4AHO+wKBgQCMZVc7uFJjPhK3oy7FFICSN3b5iKuo56cCRGPBY8AeNSYlhOPW\nY1GDhBfE8VjTv4kxrDUx4LFtWkViAAe+PBpZprQXqnT5WA/f5D63MdbpyJ2tapJt\nXoMaY9K7GGJ6c/njSEIoTBU4Qsh/FCpHj15dikUsIBIaF+aj9B2528Fa1QKBgQCL\n7I3yK4+KnKY436XCKJJp12gU8JV9uBcIZAZSdRgXznWZ//n+H7hz/1+SK/96pPz2\nIdWS0MZ0TQiflf58RtmcA7YIZhADfsCn2GHl+PPu24yd0dnOv3A673UTvSQRBwtD\nSAIWnj+abwLLpL9CKf+JsT+CCyuAz7kQHMFbB/C9OQKBgBi+RKczaBSB5iYVEeKq\njvLvQNstLRIRq4cdVRRlFGvK/pfFCgS7+7cL2Hzy1Fmo3rV90Nh9At1uPttUUUz+\nPkWwLo55IB2O4ogpTBSObAW6iAaT3CRTyKATd/quCApKgSVqyMGu+ScvJHiwVbCG\nrNCJlMrMFJMLhJXRtDtfWFQX\n-----END PRIVATE KEY-----\n",
    client_email: "edueval@edueval.iam.gserviceaccount.com",
    client_id: "117376146871501636058",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/edueval%40edueval.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  })
);

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

router.post("/paperdata", upload.single("file"), async function (req, res) {
  const { question, answerkey } = req.body;
  const file = req.file;
  console.log(req.body);
  console.log("The image BUffer values:", file.buffer);
  const input = file.buffer;

  try {
    const text = await ImagetoText(input);

    const response = await axios.post(
      "https://flask-demo111.vercel.app/receive-image",
      {
        image: text,
        question: question,
        answerkey: answerkey,
      }
    );

    console.log("Text is here:", text);
    res.send({
      message: "Data received successfully",
      Text: response.data.replace(/\n/g, " "),
    });
  } catch (error) {
    console.error("Error sending image:", error);
    res.status(500).send("Error sending image to server");
  }
});

module.exports = router;
