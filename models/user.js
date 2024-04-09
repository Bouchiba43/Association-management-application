import mongoose from "mongoose";

const { Schema} = mongoose;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: false,
        unique: true,
    },
    password: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
        default: "user",
    },
    date: {
        type: Date,
        default: Date.now,
    },
},
    {timestamps: true},
);

export default mongoose.models.User || mongoose.models("User", userSchema);