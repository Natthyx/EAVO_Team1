import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
// import {userRouter} from "./routes/user.js"
import injectRoutes from "./routes/index.js";

const app = express();
app.use(bodyParser.json());
mongoose.connect(process.env.MONGO_URL);
app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}
))
// use helmet
app.use(cookieParser())
// app.use('/auth',userRouter)

function startServer() {
    const port = process.env.PORT;
    injectRoutes(app);
    app.listen(port,() =>{
        console.log(`Server started on port ${port}`)
    })
}

startServer();


export default app
