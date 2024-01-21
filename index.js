const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./user');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://anerdene:<Erdembileg20011012>@cluster0.kivucvo.mongodb.net/user?retryWrites=true&w=majority');

app.get('/getUsers', (req, res) => {
    UserModel.find()
        .then(users => res.json(users)) 
        .catch(err => res.json(err));
});

app.listen(5173, () => {
    console.log('server is running');
});
