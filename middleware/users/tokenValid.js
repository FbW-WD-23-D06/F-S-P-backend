import jwt from "jsonwebtoken";
import "../../config.js";

import createError from "http-errors";

export const tokenValid = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    console.log("🚀 ~ tokenValid ~ token:", token);
    if (!token) {
      return next(createError(401, "no token"));
    }
    const decode = jwt.verify(token, process.env.SECRETKEY); // throw an error
    console.log("🚀 ~ tokenValid ~ decode:", decode);
    return res.json(decode);
    // req.user = decode;
    // next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return next(createError(401, "Token Expired!"));
    }
    if (error.name === "JsonWebTokenError") {
      return next(createError(401, "Token invalid!"));
    }
    return next(error);
  }
};
