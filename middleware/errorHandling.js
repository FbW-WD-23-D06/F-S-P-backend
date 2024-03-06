const errorResponder = (err, req, res, next) => {
  console.log("err.message:", err.message);
  const status = err.status || 500;
  res.status(status).send(err.message);
  next(err);
};

const invalidPathHandler = (req, res) => {
  res.status(404).send("Page not found");
  next();
};

export { errorResponder, invalidPathHandler };
