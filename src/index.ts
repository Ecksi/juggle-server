import express, { Application, Request, Response } from "express";
import cors from "cors";
import threeBallTricks from "./data/threeBallTricks.json";
import fourBallTricks from "./data/fourBallTricks.json";
import fiveBallTricks from "./data/fiveBallTricks.json";
import pool from "./db";

const app: Application = express();
let port = process.env.PORT;

if (port == null || port == "") {
  port = "5000";
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// BEGIN ROUTES
// --------------
// Get All Tricks
app.get("/tricks", async (req: Request, res: Response) => {
  try {
    const allTricks = await pool.query("SELECT * FROM tricks");

    res.json(allTricks.rows);
  } catch (err) {
    console.log(`Error occured: ${err.message}`);
  }
});

// Get One Trick
app.get("/tricks/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const trick = await pool.query("SELECT * FROM tricks WHERE trick_id = $1", [
      id,
    ]);

    res.json(trick.rows[0]);
  } catch (err) {
    console.error(`Error occured: ${err.message}`);
  }
});

// Add Trick
app.post("/tricks", async (req: Request, res: Response) => {
  try {
    const { trick_name } = req.body;
    const newTrick = await pool.query(
      "INSERT INTO tricks (trick_name) VALUES($1) RETURNING *",
      [trick_name]
    );

    res.json(newTrick.rows[0]);
  } catch (err) {
    console.error(`Error occured: ${err.message}`);
  }
});

// Edit Trick
app.put("/tricks/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { trick_name } = req.body;
    const updatedTrick = await pool.query(
      "UPDATE tricks SET trick_name = $1 WHERE trick_id = $2",
      [trick_name, id]
    );

    res.json("Trick updated");
  } catch (err) {
    console.error(`Error occured: ${err.message}`);
  }
});

// Delete Trick
app.delete("/tricks/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteTrick = await pool.query(
      "DELETE FROM tricks WHERE trick_id = $1",
      [id]
    );

    res.json("Trick deleted");
  } catch (err) {
    console.error(`Error occured: ${err.message}`);
  }
});

// Old routes
// app.get("/", async (req: Request, res: Response): Promise<Response> => {
//   return await res.status(200).send({
//     message: "Hello",
//   });
// });

// app.get("/tricks", async (req: Request, res: Response): Promise<Response> => {
//   return await res.status(200).send({
//     threeBallTricks,
//     fourBallTricks,
//     fiveBallTricks,
//   });
// });

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (err) {
  console.error(`Error occured: ${err.message}`);
}
