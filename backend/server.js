


require("dotenv").config();

const express = require("express");

const cors = require("cors");

const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");

const app = express();



// Middleware
app.use(express.json());

app.use(cors({ origin: "http://localhost:3004", credentials: true }) );

app.use(cookieParser());


// Connect to MongoDB
mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected") )
.catch((err) => console.error(err));

app.use("/api/auth", require("./routes/authRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console. log(`Server running on port ${PORT} `));