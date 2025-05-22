import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import BookRoute from "./routes/BookRoute.js";
import BorrowingRoute from "./routes/BorrowingRoute.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(BookRoute);
app.use(BorrowingRoute);


app.listen(5000, () => console.log('Server up and running...'));