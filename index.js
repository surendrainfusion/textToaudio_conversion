import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import gTTS from "gtts";
import fs from "fs";
const app = express();
const port = process.env.PORT || 7000;

//Middleware for body-parser to parse the JSON data sent by the client
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//API
app.get("/audio", (req, res) => {
  const text = req.query.text;

  //convert text to audio file
  const getVoice = new gTTS(text,"en", { slow: true });

  //fileName
  const fileName = encodeURIComponent("audio.mp3");

  //save audio file
  getVoice.save(fileName, (err) => {
    if (err) {
      console.error(err);
      return res
        .sendStatus(500)
        .json({ message: "Error generating audio file" });
    }
    res.download(decodeURIComponent(fileName), (err) => {
      if (!err) {
        console.log("Successfully download audio file");
      } else {
        console.log("Error download audio file");
      }
      fs.unlink(fileName, (err) => {
        if (err) console.error("Error unlink::", err);
      });
    });
  });
});

//server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
