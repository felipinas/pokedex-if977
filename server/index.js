const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://felipinas:pokedex123@cluster0.4cf5l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(3000, () => {
    console.log('Server is running in port 3000')
})