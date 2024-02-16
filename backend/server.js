const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");

const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const port = process.env.PORT;
const droplet = process.env.DROPLET_IP;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptionsLocal = {
  origin: "http://localhost:3000",
  methods: "GET, PUT, POST, DELETE",
  credentials: true,
};

const corsOptionsDroplet = {
  origin: `http://www.simonconrad.com`,
  methods: "GET",
  credentials: true,
};

const corsOptions = [corsOptionsLocal, corsOptionsDroplet];

app.use(cors(corsOptions));

app.use("/api/entries", require("./routes/entryRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
