import express from "express";
const router = express.Router();
import Chat from "../chat.js";

// GET all chats
router.get("/chats", async (req, res) => {
  try {
    const chats = await Chat.find().sort({ createdAt: 1 });
    res.render("index.ejs", { chats: chats });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new chat
router.post("/chats", async (req, res) => {
  try {
    const newChat = new Chat({
      from: req.body.from,
      to: req.body.to,
      msg: req.body.msg,
    });
    await newChat.save();
    res.redirect("/chats");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

router.get("/chat/:id/edit", async (req, res) => {
  try {
    let { id } = req.params;
    console.log(id);
    let chat = await Chat.findById(id);
    res.render("update.ejs", { chat: chat });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// update route
router.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let newMsg = req.body.msg;
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true, new: true },
  );

  res.redirect("/chats");
});

//destroy routes

router.delete("/chat/:id", async (req, res) => {
  let { id } = req.params;
  let deleteChat = await Chat.findByIdAndDelete(id);
  console.log("Chat is deleted");
  res.redirect("/chats");
});

// Root route test
router.get("/", (req, res) => {
  res.render("home.ejs");
});

export default router;
