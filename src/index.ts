import express, { Application, Request, Response } from "express";
import threeBallTricks from "./threeBallTricks.json";

const app: Application = express();
let port = process.env.PORT;

if (port == null || port == "") {
  port = "5000";
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello",
  });
});

app.get(
  "/all-tricks",
  async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
      threeBallTricks,
    });
  }
);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error) {
  console.error(`Error occured: ${error.message}`);
}
