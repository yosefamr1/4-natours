const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

// console.log(process.env);


db= process.env.DATABASE.replace('<db_password>', process.env.DATABASE_PASSWORD);
// console.log(db);
mongoose.connect(db,).then((con) =>{
    console.log(con.connections);
    console.log('DB connection successful!');
} )


const app = require('./app');
// console.log(process.env);


const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}....`);
});
