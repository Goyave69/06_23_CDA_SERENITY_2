const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
// const router = require("./router");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const patientFormRouter = require("./routes/patientForm");
const clinicsRouter = require("./routes/clinics");
const interventionsRouter = require("./routes/interventions");
const specialistsRouter = require("./routes/specialists");
const specialitiesRouter = require("./routes/specialities");
const checkListRouter = require("./routes/checkList");

const app = express();

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API routes
app.use("/check-list", checkListRouter);
app.use("/users", usersRouter);
app.use("/login", authRouter);
app.use("/patient-form", patientFormRouter);
app.use("/clinics", clinicsRouter);
app.use("/interventions", interventionsRouter);
app.use("/specialists", specialistsRouter);
app.use("/specialities", specialitiesRouter);

// app.use(router);

// Redirect all requests to the REACT app
const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
);

if (fs.existsSync(reactIndexFile)) {
  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile);
  });
}

// ready to export
module.exports = app;
