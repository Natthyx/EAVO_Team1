import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    subscribed: {
        type: Boolean,
        default: true
    }
});

const newsModel = mongoose.model("news", newsSchema);
export { newsModel as newsletter }