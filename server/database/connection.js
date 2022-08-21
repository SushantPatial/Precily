const { mongoose, mongo } = require("mongoose");

const mongoURL = process.env.mongoURL;

mongoose.connect(mongoURL, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Database connected successfully!");
    }
})