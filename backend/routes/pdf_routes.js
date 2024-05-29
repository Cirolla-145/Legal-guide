import express from 'express'
import cors from 'cors'
import multer from 'multer';
import Pdf from '../models/pdf_model.js'

const router = express.Router();



router.use(cors());
router.use("/files", express.static("files"));

//multer------------------------------------------------------------


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});



const upload = multer({ storage: storage });

router.post("/upload-files", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const fileName = req.file.filename;
  try {
    await Pdf.create({ title: title, pdf: fileName });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

router.get("/get-files", async (req, res) => {
  try {
    Pdf.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {}
});

//apis----------------------------------------------------------------
router.get("/", async (req, res) => {
  res.send("Success!!!!!!");
});


export default router