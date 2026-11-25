import 'dotenv/config';
import express from 'express'
import {connectDB} from './config/db.js';
import authRoute from './routes/authRoutes.js'
import cors from "cors";



// Create and configure start up express application
const app = express();
const PORT = process.env.RUNNINGPORT || 8000;

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173'
}));

app.use(express.json());

// This route handles all aunthentication and authorization
app.use("/api/auth", authRoute);

// test home route
app.get("/", (req, res) => res.json("Hello User"));
app.get("/about", (req, res) => res.json("Welcome to the Platform"))
app.get("/services", (req, res) => {
    res.send("<h1> Hello API Endpoint</h1> <p> Welcome to the server side. </p>")
})
app.get("/users", (req, res) => res.json("Users loading..."))


// connect to the MONGODB Database
await connectDB(process.env.MONGODB_URI);

app.listen(PORT, () => {
    console.log(`SERVER is running on http://localhost:${PORT}`)
})