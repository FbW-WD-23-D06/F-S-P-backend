import { body } from "express-validator";

const postsValidationRules = [
  body("title")
    .isLength({ min: 3, max: 100 })
    .withMessage(
      "The title can't be shorter than 3 or longer than 100 characters."
    ),
  body("content")
    .isLength({ min: 10 })
    .withMessage("The content must to be at least 10 characters long."),
];

export { postsValidationRules };
