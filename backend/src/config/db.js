const mongoose = require('mongoose');

const connectDB = async (config= {url:process.env.MONGO_URI }) => {
    try {
        const conn = await mongoose.connect(config.url);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch(err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;