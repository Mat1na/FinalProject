const express = require('express');
const mongoose = require('mongoose')
const app = express();
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));

//db connection
mongoose.connect('mongodb+srv://admin:Ditiseentest1991@cluster0.psf8chy.mongodb.net/sGlobe', { useNewUrlParser: true }, (err) => {
    console.log('Connected to database')
})


//create post schema
const profileSchema = mongoose.Schema({
    name: String,
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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/create_profile.html'))
})

//post request
app.post('/', (req, res) => { //open profile.html in http://localhost:3000/
    const { name, image, functionbasic, functionextra, interest1, interest2, interest3, interest4, interest5, googlescholar, researchgate, orcid, twitter, email, currentmember } = req.body
    const profile = new Profile({ name: name, image: image, functionbasic: functionbasic, functionextra: functionextra, interests: [interest1, interest2, interest3, interest4, interest5], googlescholar: googlescholar, researchgate: researchgate, orcid: orcid, twitter: twitter, email: email, currentmember: currentmember })
    profile.save()
        .then(res => {
            console.log(res, req.body)
        })
})

app.listen(3000, () => console.log('Server is listening on port 3000!'))