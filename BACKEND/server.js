const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require(require);
const dotnev = require('dotenv');
const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb Connection successful!');
})

app.listen(PORT, () => {
    console.log('Server is up and running on port : 8070');
})

//test commit for git signature