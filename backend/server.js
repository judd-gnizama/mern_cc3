import express from "express";
import { testRouter } from "./routes/testRouter.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

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
