import Worker from "../backend//models/worker";
import mongoose from "mongoose";
import { workers } from "./data";

//require (`dot.env`).config({ path: `next.config.js` })

const seedWorkers = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/apollo-project");

    await Worker.deleteMany();
    console.log("Workers are deleted");

    await Worker.insertMany(workers);
    console.log("Workers are added");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

seedWorkers();
