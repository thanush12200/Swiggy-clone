const mongoose = require('mongoose');


const connectDB = async () => {
    try {
      await mongoose.connect('mongodb+srv://thanush:thanush2004@scooplabs.ns437im.mongodb.net/swiggy-clone');
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error.message);
      process.exit(1);
    }
  };
  module.exports = connectDB;