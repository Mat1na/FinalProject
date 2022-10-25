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


//author scheme
const authorSchema = mongoose.Schema({
    authorname: String
})

//author model
const Author = mongoose.model('Authors', authorSchema)

//post request authors
app.post('/authors/create-author', (req, res) => {
    console.log(req.body)
    const author = new Author({ authorname:req.body.authorname})
    author.save()
        .then(res => {
            console.log(res, req.body)
        })
})

//project scheme
const projectSchema = mongoose.Schema({
    title: String,
    image: String,
    content: String,
    summary: String,
    researcher: String,
    imagetext: String,
    imagetextlink: String,
})

//project model
const Project = mongoose.model('Projects', projectSchema)

//post request projects
app.post('/projects/create-project', (req, res) => {
    console.log(req.body)
    const { title, image, content, summary, researcher, imagetext, imagetextlink } = req.body
    const project = new Project({ title, image, content, summary, researcher, imagetext, imagetextlink })
    project.save()
        .then(res => {
            console.log(res, req.body)
        })
})

//lab member scheme
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

//lab member model
const Profile = mongoose.model('Profiles', profileSchema)

//post request lab members
app.post('/labmembers/create-member', (req, res) => {
    console.log(req.body)
    const { membername, image, functionbasic, functionextra, interest1, interest2, interest3, interest4, interest5, googlescholar, researchgate, orcid, twitter, email, currentmember } = req.body
    const profile = new Profile({ membername, image, functionbasic, functionextra, interests: [interest1, interest2, interest3, interest4, interest5], googlescholar, researchgate, orcid, twitter, email, currentmember })
    profile.save()
        .then(res => {
            console.log(res, req.body)
        })
})

//publication member scheme
const publicationSchema = mongoose.Schema({
    publicationtitle: String,
    journal: String,
    year: String,
    issue: String,
    link: String,
    image: String,
    authors: Array,
})

//publication member model
const Publication = mongoose.model('Publications', publicationSchema)

//post request publications
app.post('/publications/create-pub', (req, res) => {
    console.log(req.body)
    const { publicationtitle, journal, year, issue, authors, link, image } = req.body
    const publication = new Publication({ publicationtitle, journal, year, issue, authors, link, image })
    publication.save()
        .then(res => {
            console.log(res, req.body)
        })
})

app.listen(3001, () => console.log('Server is listening on port 3001!'))