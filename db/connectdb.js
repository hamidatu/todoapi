import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect(process.env.DB_URI, {
      useNewUrlparser: true,
    })
    .then(() => console.log("connected to Mongoose"))
    .catch((err) => {
      console.log(err);
    });
};
export { connectDB };
