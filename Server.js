const express = require('express');
const { MongoClient } = require('mongodb');
const path = require('path');

const uri = "mongodb+srv://saifaliabidi:saifaliabidi@cluster0.zzg0otj.mongodb.net/?retryWrites=true&w=majority";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let collection;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function runDBConnection() {
    try {
        await client.connect();
        collection = client.db().collection('Cat');
        console.log('Connected to MongoDB');
    } catch (ex) {
        console.error(ex);
    }
}


async function getAllCats() {
    try {
        const cats = await collection.find({}).toArray();
        return cats;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function postCat(cat) {
    try {
        const result = await collection.insertOne(cat);
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, async () => {
    console.log(`Express server started on port ${port}`);
    await runDBConnection();
});

app.get('/api/cats', async (req, res) => {
    try {
        const result = await getAllCats();
        res.json({ statusCode: 200, data: result, message: 'get all cats success' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ statusCode: 500, message: 'Internal server error' });
    }
});

app.post('/api/cat', async (req, res) => {
    try {
        const cat = req.body;
        const result = await postCat(cat);
        res.json({ statusCode: 201, data: result, message: 'success' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ statusCode: 500, message: 'Internal server error' });
    }
});
