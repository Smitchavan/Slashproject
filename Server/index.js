const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");
const connectDb = require("./config/db");
const auth=require('./middlewares/auth');
const contact=require('./model/Contact')

//middlewares

app.use(express.json());
app.use(cors());


//routes
app.get("/protected",auth,(req,res)=>{return res.status(200).json({ ...req.user._doc });} )
app.use("/api/",require('./routes/auth'))
// app.use("/api",require("./routes/contact"));
// app.use("/api",require("./routes/twilio"));
//server
app.listen(4001, async (err, ok) => {
  try {
    await connectDb();
    console.log("server connected to 4001");
  } catch {
    if (err) throw err;
  }
});
