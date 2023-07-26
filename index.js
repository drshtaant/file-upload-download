const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const uploadPath = path.join(__dirname, "files", "uploaded.bin");

// Set up Multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "files");
  },
  filename: function (req, file, cb) {
    cb(null, "uploaded.bin");
  },
});

const upload = multer({ storage: storage });

// Error handling middleware
const handleError = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
};

// POST endpoint for file upload
app.post("/upload", upload.single("file"), (req, res, next) => {
  console.log("Upload started");

  // Listen for the 'finish' event of the response stream
  res.on("finish", () => {
    console.log("Upload finished");
  });

  res.status(200).send("File uploaded successfully.");
});

// GET endpoint for file download
app.get("/download", (req, res, next) => {
  // Check if the file exists
  fs.access(uploadPath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send("File not found. Download failed.");
    } else {
      // Stream the file back to the browser
      console.log("Download finished");
      const fileStream = fs.createReadStream(uploadPath);
      fileStream.pipe(res);
    }
  });
});

// Error handling middleware
app.use(handleError);

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
