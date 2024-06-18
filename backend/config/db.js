require ("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://itpm:itpm12345@cluster0.dmnqinh.mongodb.net/BlinData?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
