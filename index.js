const express = require("express");

const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// routes
const authRoute = require('./routes/auth');
const teacherRoute = require('./routes/teachers');
const parentRoute = require('./routes/parents');
const studentRoute = require('./routes/students');

const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database Connected Successfully"))
    .catch((err) => {
        console.log(err);
    });


app.get("/", (req, res) => {
    res.send('<h1>Hello there</h1>')
})

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/teachers', teacherRoute);
app.use('/api/parents', parentRoute);
app.use('/api/students', studentRoute);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Backend server is running on PORT: ${PORT}`);
});