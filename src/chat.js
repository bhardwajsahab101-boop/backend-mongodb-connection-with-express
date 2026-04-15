import mongoose from "mongoose";
const chatSchema = new mongoose.Schema({

        from :{type: String},
        to : {type: String},
        msg:{type: String,
            maxlength: 1000
        }
        ,
        createdAt : {type: Date, default: Date.now}

})
const Chat = mongoose.model('Chat', chatSchema);
export default Chat;