import "./config.js";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import path from "path";

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


// Multer configuration
export const cloudinaryMulter = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    console.log('req:',req);
    let ext = path.extname(file.originalname);
    console.log('file:',file);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" &&) {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
