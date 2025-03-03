const express = require("express");
const cors = require("cors");
// const dotenv = require("dotenv");

const app = express();
dotenv.config();

// app.use(cors());
app.use(cors({ origin: true }));
app.use(express.json());

// const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
