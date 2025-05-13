import express from "express";
import multer from "multer";
import sharp from "sharp";
import fs from "fs";
import path from "path";

const app= express();
const port = 3000;

const uploadDir = "uploads";
const thumbDir = path.join(uploadDir,"thumb");

if(!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir)
if(!fs.existsSync(thumbDir)) fs.mkdirSync(thumbDir)

// Multer 설정
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + file.originalname;
      cb(null, uniqueSuffix);
    },
  });

const fileFilter = (req,file,cb)=>{
    const allowed = /jpeg|jpg|png|gif/;
    const ext = path.extname(file.originalname).toLowerCase();
    const mime=file.mimetype;
    if(allowed.test(ext) && allowed.test(mime)){
        cb(null,true);
    }
    else{
        cb(new Error("이미지 파일만 업로드 할 수 있습니다."))
    }
    
}

const upload = multer({
    storage,
    fileFilter,
    limits :{fieldSize:5*1024*1024},
});
// 썸네일 생성 및 PNG 변환
app.post("/upload-image", upload.single("image"), async (req, res) => {
    if (!req.file) return res.status(400).json({ error: "파일이 없습니다." });
  
    const { filename, path: filePath } = req.file;
  
    // 원본 파일명에서 확장자 제거
    const baseName = path.parse(filename).name; // 파일 이름만 추출
    const thumbnailPngName = `thumb-${baseName}.png`; // 기존 파일을 PNG로 파일 명 변환
    const thumbnailPath = path.join(thumbDir, thumbnailPngName);
  
    const width = parseInt(req.query.width) || 100;
    const height = parseInt(req.query.height) || 100;
  
    try {
      await sharp(filePath)
        .resize(width, height)
        .png() // PNG로 변환 (위에 파일명만 바뀐 파일)
        .toFile(thumbnailPath);
  
      res.json({
        message: "업로드 및 PNG 썸네일 생성 성공",
        original: `/uploads/${filename}`,
        thumbnail: `/uploads/thumb/${thumbnailPngName}`,
        size: `${width}px * ${height}px`,
      });
    } catch (err) {
      console.error("썸네일 생성 실패:", err);
      res.status(500).json({ error: "썸네일 생성 실패" });
    }
  });

app.listen(port, () => {
    console.log(`${port}번으로 서버 실행 중`);
  });