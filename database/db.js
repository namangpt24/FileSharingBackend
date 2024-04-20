import mongoose from "mongoose"

const DbConnection = async ()=>{
    const MONGODB_URL = "mongodb+srv://nmndb:harsh971@cluster0.vnzqba8.mongodb.net/?retryWrites=true&w=majority"

    try {
        await mongoose.connect(MONGODB_URL,
        {   useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName:'FileSharing'}
        );
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error in connecting with database",error);
    }
}

export default DbConnection;