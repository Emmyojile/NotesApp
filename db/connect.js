const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.mongo_uri);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectDB;




// const mongoose = require('mongoose')

// const connectDB = (url) => {
//     return mongoose.connect(url, {
//         useNewUrlParser : true,
//         useUnifiedTopology : true
//     })
// }


// module.exports = connectDB


// const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.mongo_uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       serverSelectionTimeoutMS: 30000, // Increase the timeout value (30 seconds in this example)
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// };

// // const connectDB = async() => {
// //   try {
// //     const conn = await mongoose.connect(process.env.mongo_uri);
// //     console.log(`Database Connected: ${conn.connection.host}`);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }
// module.exports = connectDB;

// // const mongoose = require('mongoose');

// // const connectDB = (url) => {
// //     return new mongoose.createConnection(url, {
// //         useNewUrlParser: true,
// //         useUnifiedTopology: true
// //     })
// // }

// // module.exports = connectDB