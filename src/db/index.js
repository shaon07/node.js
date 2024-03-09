import {DB_NAME} from "../constants.js";
import mongoose from "mongoose";

const connectDD = async () => {
    try {
        const connectionDB = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`MONGODB Connected: ${connectionDB.connection.host}`);
    } catch (error) {
        console.log(`MONGODB Connection Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDD;