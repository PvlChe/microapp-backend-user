const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user');
const dummy = require('./dummyData/dummyUsers');


const app = express();

//connect to mongoDB
const mongoDBURI='mongodb+srv://pavel:pavel@bachelor-item-pmyvt.mongodb.net/User?retryWrites=true&w=majority';

mongoose.Promise = global.Promise;

// bodyparser
app.use(bodyParser.json());

// CORS Header Handling
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
/*dummy.forEach( data => {
    const user = new User(data);

    user.save().then( data => {
        console.log('Success', data);
    });
});*/

app.use('/user', require('./routes/user'));

// response handling
app.use((req,res,next)=> {
    console.log('test send');
    res.json(res.locals.items);
    delete res.locals.items;
});

// error handling
app.use((err,req,res,next) => {
    const status = err.statusCode || 500;
    const message = err.message;
    const data = err.data;
    res.status(status).json({
        message: message,
        data: data
    })
});

mongoose.connect(mongoDBURI, {useNewUrlParser: true , useUnifiedTopology: true }).then(()=> {
    app.listen(process.env.PORT || 4001, function () {
        console.log('listening');
    });
}).catch((err)=> {
});
