import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import routes from "./routes/rou.js";
import methodOverride from "method-override" 



const app = express();
app.use(methodOverride("_method"));
const port = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/views"));
app.use(express.static(path.join(process.cwd(), "src/public")));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
app.use("/chats", routes);
app.use("/chats/new", routes);


// Connect to MongoDB
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/saas");
  console.log("Connected to MongoDB");
}
main().catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
