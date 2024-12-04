import mongoose from "mongoose";

//const MONGO_URI= "mongodb://127.0.0.1:27017/match-up"


export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connecting to MongoDB: ", error);
		process.exit(1); // exit process with failure, 0 for success
	}
};