import { body, validationResult } from "express-validator";

const userValidationRules = [
  body("userName").isString().withMessage("The username must be a string!"),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const errorMessags = errors.array().map((err) => {
    return { [err.path]: err.msg };
  });

  return next(res.status(422).json({ errors: errorMessags }));
};

export { userValidationRules, validate };
