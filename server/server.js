import 'dotenv/config';
import express from 'express'
import {connectDB} from './config/db.js';



// Create and configure start up express application
const app = express();
const PORT = process.env.RUNNINGPORT || 8000;

app.use(express.json());

// test home route
app.get("/", (req, res) => res.json("Hello User"));
app.get("/about", (req, res) => res.json("Welcome to the Platform"))
app.get("/services", (req, res) => {
    res.send("<h1> Hello API Endpoint</h1> <p> Welcome to the server side. </p>")
})
app.get("/users", (req, res) => res.json("Users loading..."))


// connect to the MONGODB Database
await connectDB(process.env.MONGODB_URI)

app.listen(PORT, () => {
    console.log(`SERVER is running on http://localhost:${PORT}`)
})