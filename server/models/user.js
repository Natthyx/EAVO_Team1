import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    verified: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const UserModel = mongoose.model("user", userSchema);
export { UserModel as User }