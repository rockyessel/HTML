const app = require("./app");
const dotenv = require('dotenv')
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
    console.log("UNCAUGHT EXCEPTION, APP SHUTTING NOW!!");
    console.log(err.message, err.name);
    process.exit(1);
});

const {DB}= process.env
// console.log(DB)

dotenv.config({ path: '.env'})

mongoose.connect('mongodb+srv://user:user@cluster0.tho56.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("DB connected successfully");
    });

const port = 5000;

const server = app.listen(port, () => {
    console.log("Server is up listening on port:" + port);
});