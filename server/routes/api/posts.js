const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async(req, res) => {
    const posts = await loadMatches();
    res.send(await posts.find({}).toArray());
});

const posts = await loadMatches();
router.get('/register', async(req, res) => {
    res.send(await posts.find({}).toArray());
});


router.post('/register', async(req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        name: req.body.name,
        password: req.body.password,
        createdAt: new Date()
    })
    res.status(201).send();
})

router.delete('/:id', async(req, res) => {
    const posts = await loadMatches();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send({});
});

async function loadMatches() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://user:user@cluster.aebgh.mongodb.net/scouting-app?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('scouting-app').collection('collection');
}

module.exports = router;