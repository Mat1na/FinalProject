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
const projectSchema = mongoose.Schema({
    title: String,
    image: String,
    content: String,
    summary: String,
    researcher: String,
    imagetext: String,
    imagetextlink: String,
})

//compile schema to model
const Project = mongoose.model('Project', projectSchema)

//post request
app.post('/projects/create-project', (req, res) => {
    console.log(req.body)
    const { title, image, content, summary, researcher, imagetext, imagetextlink } = req.body
    const project = new Project({ title, image, content, summary, researcher, imagetext, imagetextlink })
    project.save()
        .then(res => {
            console.log(res, req.body)
        })
})

app.listen(3001, () => console.log('Server is listening on port 3001!'))