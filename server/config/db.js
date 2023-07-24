// database connection file to MongoDB
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://garlatg117:3fmuWbi5sI33PpSn@cluster0.umnavd8.mongodb.net/optimum?retryWrites=true&w=majority', {
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
