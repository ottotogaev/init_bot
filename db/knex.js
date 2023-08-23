require('dotenv').config()
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];

// exports.connectDB = async () => {
//     await config.connection()
//         .then(() => console.log(`Database ${config.connection.database} is connec+ted successfully`))
//         .catch((err) => console.log(`Error occured during connecting DB...ERROR => ${err}`));
// }

module.exports = require('knex')[config];