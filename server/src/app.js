import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import recipesRoutes from "./routes/recipes.js";
import { v2 as cloudinary } from "cloudinary";
import Multer from "multer";
import { config as dotenvConfig } from "dotenv";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(json());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ success: true });
});
app.use("/recipes", recipesRoutes);

dotenvConfig();

const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);
    res.json(cldRes);
    const secureUrl = cldRes.secure_url;
    const public_id = cldRes.public_id;
  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }
});
async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
}
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
