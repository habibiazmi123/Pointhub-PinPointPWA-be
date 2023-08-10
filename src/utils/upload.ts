import { S3Client } from "@aws-sdk/client-s3";
import multer from "multer";
import multerS3 from "multer-s3";

const s3 = new S3Client({
  region: `${process.env.S3_BUCKET_REGION}`,
  credentials: {
    accessKeyId: `${process.env.S3_ACCESS_KEY}`,
    secretAccessKey: `${process.env.S3_ACCESS_SECRET}`,
  },
});

const uploadImage = multer({
  storage: multerS3({
    s3,
    bucket: `${process.env.S3_BUCKET_NAME}`,
    metadata: (_req, file, cb) => {
      cb(null, { fieldname: file.fieldname });
    },
    key: function (_req, _file, cb) {
      cb(null, `image-${Date.now()}.jpeg`);
    },
  }),
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

export default uploadImage;
