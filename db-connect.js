import pkg from "pg";

export const db = new pkg.Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "admin",
  database: "postmaster",
});

db.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

// create table using the code

// db.query(
//   `CREATE TABLE IF NOT EXISTS users (
//   id PRIMARY KEY DEFAULT uuid_generate_v4(),
//   userName VARCHAR(15) UNIQUE NOT NULL,
//   password VARCHAR(100) NOT NULL,
// )`,
//   (err, res) => {
//     if (err) throw err;
//     console.log("Table is successfully created");
//   }
// );

db.query("SELECT * FROM users", (err, res) => {
  if (err) {
    console.error("error", err.stack);
  } else {
    console.log(res.rows);
  }
});


// https://www.youtube.com/watch?v=HO5iiDaZO2E

// import mongoose from "mongoose";

// const connectMongoDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_ATLAS_URI);
//     console.log("DB connected");
//     const collections = await mongoose.connection.db
//       .listCollections()
//       .toArray();
//     const collectionsNames = collections.map(async (collection) => {
//       const documentsAmount = await mongoose.connection.db
//         .collection(collection.name)
//         .countDocuments();
//       return { name: collection.name, documentsAmount };
//     });
//     console.log("collections infos:", await Promise.all(collectionsNames));
//   } catch (error) {
//     console.log("error:", error);
//   }
// };

// connectMongoDB();
