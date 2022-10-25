const express = require('express');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors')
require('dotenv').config()
app.use(cors());

app.use(express.json());

//db connection (Atlass)
mongoose.connect(process.env.DATABASEURL, { useNewUrlParser: true }, (err) => {
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

//create post schema
const profileSchema = mongoose.Schema({
    membername: String,
    image: String,
    functionbasic: String,
    functionextra: String,
    interests: Array,
    googlescholar: String,
    researchgate: String,
    orcid: String,
    twitter: String,
    email: String,
    currentmember: String
})

//compile schema to model
const Profile = mongoose.model('Profiles', profileSchema)

//post request
app.post('/labmembers/create-member', (req, res) => {
    console.log(req.body)
    const { membername, image, functionbasic, functionextra, interest1, interest2, interest3, interest4, interest5, googlescholar, researchgate, orcid, twitter, email, currentmember } = req.body
    const profile = new Profile({ membername, image, functionbasic, functionextra, interests: [interest1, interest2, interest3, interest4, interest5], googlescholar, researchgate, orcid, twitter, email, currentmember })
    profile.save()
        .then(res => {
            console.log(res, req.body)
        })
})

app.listen(3001, () => console.log('Server is listening on port 3001!'))