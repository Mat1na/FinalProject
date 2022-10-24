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
app.post('/labmembers/create', (req, res) => {
    console.log(req.body)
    const profile = new Profile({ membername: req.body.membername, 
        image: req.body.image, 
        functionbasic: req.body.functionbasic, 
        functionextra: req.body.functionextra, 
        interests: [req.body.interest1, req.body.interest2, req.body.interest3, req.body.interest4, req.body.interest5], 
        googlescholar: req.body.googlescholar, 
        researchgate: req.body.researchgate, 
        orcid: req.body.orcid, 
        twitter: req.body.twitter, 
        email: req.body.email, 
        currentmember: req.body.currentmember })
    profile.save()
        .then(res => {
            console.log(res, req.body)
        })
})

app.listen(3001, () => console.log('Server is listening on port 3001!'))