import jwt from "jsonwebtoken";
import "../../config.js";
import User from "../../models/usersModel.js";
import createError from "http-errors";

export const tokenValid = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    console.log("🚀 ~ tokenValid ~ token:", token);
    if (!token) {
      return next(createError(401, "no token"));
    }
    const decoded = jwt.verify(token, process.env.SECRETKEY); // throw an error
    console.log("🚀 ~ tokenValid ~ decode:", decoded);
    // get user from DB
    const user = await User.findById(decoded.userID);

    // return the user and decoded token to the client
    res.json(decoded, user);
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
