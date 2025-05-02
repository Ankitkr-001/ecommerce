const mongoose = require("mongoose")

const connectDb = async ()=>{
    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`\n MongoDB Connected !! DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error in conecting MongoDb", error);
        process.exit(1)
    }
}

module.exports = connectDb