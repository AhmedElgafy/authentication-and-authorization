import { Request, Response } from "express";
import { validationResult } from "express-validator";
const Validate = (req: Request, res: Response, next: CallableFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let error = {};
    errors.array().map((err) => err.msg);
    return res.status(422).json({ error });
  }
  next();
};
export default Validate;
