import mongoose from "mongoose";

const connect = async () => {
    if (mongoose.connection[0].readyState) {
        return;
    }
    
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log("Connected to MongoDB");
    }
    catch (error) {
        throw new Error("Failed to connect to MongoDB");
    }
}

export default connect;