const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const path = require("path")
const itemRoute = require("./routes/itemRoute")

app.use(cors(
    {
        credentials: true,
        origin: "http://localhost:3001",
        exposedHeaders: ["set-cookie"],
    }
))
app.use(session({
    secret: "This will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))
app.use(express.json({ limit: "1000mb", extended: true }));
app.use("/images", express.static(path.join(__dirname, "/images")));
// Connection with database
mongoose.connect('mongodb+srv://mern:MJRLHKKre93s2Ca8@cluster0.5cfdn01.mongodb.net/ProjectMERN?retryWrites=true&w=majority&appName=Cluster0')
    .then(() =>
        console.log("DB connected"))
    .catch((err) => console.log("Something is wrong", err))


app.use(itemRoute)
// Test
app.use('/', (req, res) => {
    res.send("Hello Node!")
})

// Server
app.listen(4000, () => {
    console.log("Server created!")
})