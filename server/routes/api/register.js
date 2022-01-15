const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});


router.post('/login', async (req, res) => {
    const posts = await loadPostsCollection();
    let name = req.body.name;
    let password = req.body.password;

    let userArray = await posts.find({}).toArray();
    console.log(userArray);
    
    
    userArray.forEach(element => { 
        if(element.name === name && element.password === password){
            
            const jwt = require('njwt')
            const claims = { iss: 'AMMJ', sub: 'AzureDiamond' }
            const token = jwt.create(claims, 'bottle-neck')
            token.setExpiration(new Date().getTime() + 60*1000)
              res.status(201).send(token.compact() + ' login sucessful');
        }
        res.status(404).send('login failed');
    });
    

   
});

router.get('/register', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
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