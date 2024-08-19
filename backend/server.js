import express from "express";
import { testRouter } from "./routes/testRouter.js";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;
const FRONTEND_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : process.env.FRONTEND_URL;

// Middlewares -------------------------------------

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const corsOptions = {
  origin: FRONTEND_URL,
  methods: "GET, POST, PUT, PATCH, DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

// Routes -------------------------------------------

app.get("/", (req, res) => {
  res.send("Server running!");
});

app.use("/api/test", testRouter);

try {
  app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}
