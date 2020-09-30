// const express = require('express');
// const app = express();
// app.get('/', (req, res, next) => {
//     res.send('running node api');
// });
// //serving the application the port 3000
// app.listen(3000, console.log('server started on port 3000'));
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

//mongoDB connection string
const url = "mongodb://127.0.0.1:27017/sample";
app.use(cors())
app.use(bodyParser.json())
// mongodb+srv://user:<password>@node-api-8r36a.mongodb.net/test?retryWrites=true
// app.get('/', (req, res, next)=>{
//     res.send('running node api');
// });
const apiroutes = require('./routes/api_route.js');
app.use('/', apiroutes); //using routes specified externally
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true  })
  .then(()=>{
    app.listen(5000);
    console.log('database connected!');})
  .catch(err => console.log(err));