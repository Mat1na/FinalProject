const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
require('dotenv').config()
app.use(cors());

app.use(express.json());

//db connection (Atlass)
// mongoose.connect(process.env.DATABASEURL, { useNewUrlParser: true }, (err) => {
//     console.log('Connected to database')
// })

//db connection (Compass)
mongoose.connect('mongodb://localhost:27017/sglobe', { useNewUrlParser: true }, (err) => {
    console.log('Connected to database')
})


//create post schema
const authorSchema = mongoose.Schema({
    authorname: String
})

//compile schema to model
const Author = mongoose.model('Author', authorSchema)

//post request
app.post('/authors/create-author', (req, res) => {
    console.log(req.body)
    const author = new Author({ authorname:req.body.authorname})
    author.save()
        .then(res => {
            console.log(res, req.body)
        })
})

app.listen(3001, () => console.log('Server is listening on port 3001!'))