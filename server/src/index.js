const http = require("http");
const dotenv = require("dotenv");

dotenv.config();

http.createServer().listen(process.env.PORT, () => {
  console.log(`Server is running at: http://localhost:${process.env.PORT}`);
});
