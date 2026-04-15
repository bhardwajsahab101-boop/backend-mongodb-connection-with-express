import mongoose from "mongoose";
import Chat from "./chat.js";

async function seedData() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/saas");

    // Check if data exists
    const count = await Chat.countDocuments();
    if (count === 0) {
      let allChats = [
        { from: "ayush", to: "mahadev", msg: "i love you baba ji" },
        { from: "rahul", to: "sneha", msg: "kal milte hain" },
        { from: "priya", to: "ayush", msg: "assignment complete hua kya?" },
        { from: "amit", to: "rohan", msg: "bhai match dekh raha hai?" },
        { from: "sneha", to: "rahul", msg: "haan 5 baje milte hain" },
        { from: "rohan", to: "amit", msg: "IPL dekh raha hu" },
        { from: "ayush", to: "priya", msg: "haan almost ho gaya" },
        { from: "karan", to: "neha", msg: "tum kaisi ho?" },
        { from: "neha", to: "karan", msg: "main theek hu" },
        { from: "vikas", to: "ayush", msg: "project ka kya scene hai?" },
        { from: "ayush", to: "vikas", msg: "backend almost ready hai" },
        { from: "rahul", to: "ayush", msg: "bhai notes bhej de" },
        { from: "priya", to: "sneha", msg: "kal exam hai?" },
        { from: "sneha", to: "priya", msg: "haan kal hi hai" },
        { from: "amit", to: "ayush", msg: "server chal raha hai kya?" },
        { from: "rohit", to: "mohit", msg: "bhai gym chalna hai?" },
        { from: "mohit", to: "rohit", msg: "haan 6 baje chalte hain" },
        { from: "deepak", to: "sonu", msg: "movie dekhne chale?" },
        { from: "sonu", to: "deepak", msg: "kaunsi movie?" },
        { from: "ayush", to: "rahul", msg: "kal college aa raha hai?" },
      ];
      await Chat.insertMany(allChats);
      console.log("Sample data seeded successfully!");
    } else {
      console.log("Data already exists. Skipping seed.");
    }
  } catch (err) {
    console.error("Seed error:", err);
  } finally {
    mongoose.connection.close();
  }
}

seedData();
