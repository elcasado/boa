// database connection file to MongoDB
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://dkhheghsjf:ld7LJU1whLv8bYwu@cluster0.rwkhmpr.mongodb.net/boa?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log(`mongodb connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
