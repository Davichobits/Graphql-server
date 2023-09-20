const mongoose = require('mongoose');

// connect function
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      // options
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('MongoDB connection SUCCESS');
  } catch (error) {
    console.log('MongoDB connection FAIL', error);
    process.exit(1);
  }
}

module.exports = connectDB;