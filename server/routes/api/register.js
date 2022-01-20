const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/users', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});


router.post('/login', async (req, res) => {
    const posts = await loadPostsCollection();
    let name = req.body.name;
    let password = req.body.password;
    let userArray = await posts.find({}).toArray();
    let login = false;

    const jwt = require('njwt')
    const claims = { iss: 'AMMJ', sub: 'AzureDiamond' }
    const token = jwt.create(claims, 'bottle-neck')
    token.setExpiration(new Date().getTime() + 60*1000)
    
    userArray.forEach(element => { 
        if(element.name === name && element.password === password)
        login = true;
    });
    
    if(login)
    res.status(201).send(token.compact());
    else
    res.status(401).send("Invalid Login, Please Try Again");
   
});

router.get('/register', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

router.post('/new-user', async (req, res) => {
    const posts = await loadPostsCollection();
    let userArray = await posts.find({}).toArray();
    let existingUser = false
    userArray.forEach(element => { 
        if(element.name === req.body.name ){
           existingUser = true;
        }
    });

    if(existingUser){
        res.status(401).send("Invalid account details, Username already exists");
    }else{
    await posts.insertOne({
        name: req.body.name,
        password:req.body.password,
        createdAt: new Date()
    })
    const jwt = require('njwt')
  const claims = { iss: 'fun-with-jwts', sub: 'AzureDiamond' }
  const token = jwt.create(claims, 'top-secret-phrase')
  token.setExpiration(new Date().getTime() + 60*1000)
    res.status(201).send(`Username: ${req.body.name} Password: ${req.body.password} Token: ${token.compact()} `);
}
})


router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send({});
  });

async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://user:user@cluster.aebgh.mongodb.net/scouting-app?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    });

    return client.db('vue-express').collection('posts');
}

module.exports = router;