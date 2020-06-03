// This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

// To use the default JavaScript Promises
mongoose.Promise = global.Promise;

// Default port the mongodb runs on is 27017
mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


module.exports = {
    mongoose
};