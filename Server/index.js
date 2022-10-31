const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());

///////////////////////////////////// DATABASE CONNECTION ////////////////////////////////////////

//db connection (Atlas)
// mongoose.connect(process.env.DATABASEURL, { useNewUrlParser: true }, (err) => {
//     console.log('Connected to database')
// })

// db connection (Compass)
mongoose.connect(
  "mongodb://localhost:27017/sglobe",
  { useNewUrlParser: true },
  (err) => {
    console.log("Connected to database");
  }
);

////////////////////////////////////// AUTHORS ////////////////////////////////////////

//author scheme
const authorSchema = mongoose.Schema({
  authorname: String
});

//author model
const Author = mongoose.model("Authors", authorSchema);

//post request authors
app.post("/authors/create-author", (req, res) => {
  console.log(req.body);
  const author = new Author({ authorname: req.body.authorname });
  author.save().then((res) => {
    console.log(res, req.body);
  });
});

//sending authors to rest api
app.get("/authors/fetch-authors", (req, res) => {
  Author.find({}).then((items) => {
    res.json(items);
  });
});

//delete author
app.delete("/authors/:_id", (req, res) => {
  const { _id } = req.params //get id
  Author.findByIdAndDelete(_id)
    .then(result => {
      res.json({
        message: 'deleted',
        data: result
      })
    })
})

//update author
app.post('/authors/edit-author/:_id', (req, res) => {
  const { _id } = req.params
  console.log(req.body.authorname)
  Author.findByIdAndUpdate(_id, { authorname: req.body.authorname }, function (err, docs) {
    if (err) {
      console.log(err)
    } else {
      console.log('Updated user')
    }
  })
})


////////////////////////////////////// PROJECTS ////////////////////////////////////////

//project scheme
const projectSchema = mongoose.Schema({
  title: String,
  image: String,
  content: String,
  summary: String,
  researcher: String,
  imagetext: String,
  imagetextlink: String,
});

//project model
const Project = mongoose.model("Projects", projectSchema);

//post request projects
app.post("/projects/create-project", (req, res) => {
  console.log(req.body);
  const {
    title,
    image,
    content,
    summary,
    researcher,
    imagetext,
    imagetextlink,
  } = req.body;
  const project = new Project({
    title,
    image,
    content,
    summary,
    researcher,
    imagetext,
    imagetextlink,
  });
  project.save().then((res) => {
    console.log(res, req.body);
  });
});

//sending projects to rest api
app.get("/projects/fetch-projects", (req, res) => {
  Project.find({}).then((items) => {
    res.json(items);
  });
});

//delete project
app.delete("/projects/:_id", (req, res) => {
  const { _id } = req.params //get id
  Project.findByIdAndDelete(_id)
    .then(result => {
      res.json({
        message: 'deleted',
        data: result
      })
    })
})

//update project
app.post('/projects/edit-project/:_id', (req, res) => {
  const { _id } = req.params
  console.log(req.body.title)
  Project.findByIdAndUpdate(_id, { title: req.body.title, image: req.body.image, content: req.body.content, summary: req.body.summary, researcher: req.body.researcher, imagetext: req.body.imagetext, imagetextlink: req.body.imagetextlink }, function (err, docs) {
    if (err) {
      console.log(err)
    } else {
      console.log('Updated project')
    }
  })
})



////////////////////////////////////// LABMEMBERS ////////////////////////////////////////

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
  currentmember: String,
});

//lab member model
const Profile = mongoose.model("Profiles", profileSchema);

//post request lab members
app.post("/labmembers/create-member", (req, res) => {
  console.log(req.body);
  const {
    membername,
    image,
    functionbasic,
    functionextra,
    interests,
    googlescholar,
    researchgate,
    orcid,
    twitter,
    email,
    currentmember,
  } = req.body;
  const profile = new Profile({
    membername,
    image,
    functionbasic,
    functionextra,
    interests,
    googlescholar,
    researchgate,
    orcid,
    twitter,
    email,
    currentmember,
  });
  profile.save().then((res) => {
    console.log(res, req.body);
  });
});

//sending lab members to rest api
app.get("/labmembers/fetch-labmembers", (req, res) => {
  Profile.find({}).then((items) => {
    res.json(items);
  });
});

//delete lab member
app.delete("/labmembers/:_id", (req, res) => {
  const { _id } = req.params //get id
  Profile.findByIdAndDelete(_id)
    .then(result => {
      res.json({
        message: 'deleted',
        data: result
      })
    })
})


////////////////////////////////////// PUBLICATIONS ////////////////////////////////////////

//publication member scheme
const publicationSchema = mongoose.Schema({
  publicationtitle: String,
  journal: String,
  year: String,
  issue: String,
  abstract: String, // I added the abstract here and at the request bcause it was missing
  link: String,
  image: String,
  authors: Array,
});

//publication member model
const Publication = mongoose.model("Publications", publicationSchema);

//post request publications
app.post("/publications/create-pub", (req, res) => {
  console.log(req.body);
  const {
    publicationtitle,
    journal,
    year,
    issue,
    abstract,
    authors,
    link,
    image,
  } = req.body;
  const publication = new Publication({
    publicationtitle,
    journal,
    year,
    issue,
    abstract,
    authors,
    link,
    image,
  });
  publication.save().then((res) => {
    console.log(res, req.body);
  });
});

//sending publications to rest api
app.get("/publications/fetch-publications", (req, res) => {
  Publication.find({}).then((items) => {
    res.json(items);
  });
});

//delete publication
app.delete("/publications/:_id", (req, res) => {
  const { _id } = req.params //get id
  Publication.findByIdAndDelete(_id)
    .then(result => {
      res.json({
        message: 'deleted',
        data: result
      })
    })
})


////////////////////////////////////// Server port ////////////////////////////////////////

app.listen(3001, () => console.log("Server is listening on port 3001!"));
