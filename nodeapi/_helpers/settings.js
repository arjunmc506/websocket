// settings.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  endpoint: process.env.API_URL,
  masterKey: process.env.API_KEY,
  port: process.env.PORT,
  vfilepath:process.env.VOICE_FILE_PATH,
  fileSize:process.env.FILESIZE
};