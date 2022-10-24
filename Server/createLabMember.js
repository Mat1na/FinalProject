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