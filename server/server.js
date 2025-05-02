const express = require("express");
const connectDb = require("./db/index.js");
const app = express();
const cookieParser = require("cookie-parser")
const cors = require("cors")


connectDb().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}).catch(()=>{
    console.log("Error connecting to database");
})

app.use(cors({
    origin : "http://localhost:5173/",
    methods : ["GET","POST", "PUT","DELETE"],
    allowedHeaders : [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma"
    ],
    credentials: true,
}
))

app.use(cookieParser());
app.use(express.json());
