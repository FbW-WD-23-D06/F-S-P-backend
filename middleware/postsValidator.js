import { body } from "express-validator";

const postsValidationRules = [
  body("title")
    .isLength({ min: 3, max: 50 })
    .withMessage(
      "The title can't be shorter than 3 or longer than 50 characters."
    ),
  body("content")
    .isLength({ min: 10, max: 2000 })
    .withMessage(
      "The content must to be at least 10 characters long and not longer than 2000 characters."
    ),
];

export { postsValidationRules };
