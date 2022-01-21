const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Gets all data (used for match display)
router.get('/', async(req, res) => {
    const posts = await loadMatches();
    res.send(await posts.find({}).toArray());
});

//const posts = await loadMatches();
router.get('/register', async(req, res) => {
    const posts = await loadMatches();
    res.send(await posts.find({}).toArray());
});

//Gets one piece of data based off of its id (used for playback)
router.get('/:id', async(req, res) => {
    const posts = await loadMatches()
    res.send(await posts.findOne({ _id: new mongodb.ObjectID(req.params.id) }))
})


router.post('/register', async(req, res) => {
    const posts = await loadMatches();
    await posts.insertOne({
        name: req.body.name,
        password: req.body.password,
        createdAt: new Date()
    })
    res.status(201).send();
})


//Inserts a new match (used for scout)
router.post('/', async(req, res) => {
    const posts = await loadMatches();
    await posts.insertOne({
        matchNumber: req.body.matchNumber,
        teamNumber: req.body.teamNumber,
        flipped: req.body.flipped,
        events: req.body.events,
        climb: req.body.climb,
        defense: req.body.defense,
        comments: req.body.comments,
        scoutName: req.body.scoutName,
        win: req.body.win,
        team: req.body.team,
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