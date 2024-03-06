import {  validationResult } from "express-validator";

export default function validate(req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const errorMessags = errors.array().map((err) => {
    return { [err.param]: err.msg };
  });
  return next(res.status(422).json({ errors: errorMessags }));
}
