import express, { Application, Request, Response } from "express";
import cors from "cors";
import threeBallTricks from "./data/threeBallTricks.json";
import fourBallTricks from "./data/fourBallTricks.json";
import fiveBallTricks from "./data/fiveBallTricks.json";

const app: Application = express();
let port = process.env.PORT;

if (port == null || port == "") {
  port = "5000";
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello",
  });
});

app.get("/tricks", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    threeBallTricks,
    fourBallTricks,
    fiveBallTricks,
  });
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error.message}`);
}
