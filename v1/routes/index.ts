import express, { Request, Response } from "express";
const app = express();
app.get("/v1", (req: Request, res: Response) => {
  try {
    res.status(200).json({
      status: "success",
      data: [],
      message: "Welcome to our API homepage!",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});
export default app;
