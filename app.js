const { findSeries } = require("async");
const express = require("express");
const app = express();
const fs = require('fs/promises');

// middleware
app.use(express.json());

// create 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;

const uri = "mongodb+srv://haskmoney:H62804972mLod*@cluster0.kmz4ij8.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.get('/', async (req, res) => {
  res.send(await fs.readFile('index.html', 'utf8'));
})

