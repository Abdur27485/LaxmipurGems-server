const express = require('express');
const port = process.env.PORT || 27485;
const app = express();
const cors = require('cors');
require('dotenv').config()

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('jewellery shop server is running...');
})



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.mongoUserName}:${process.env.mongoPassword}@milestone11.ja7anyt.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        const database = client.db('LaxmipurGemsDB');
        const allJewellery = database.collection('allJewellery');

        // all jewelleries api
        app.get('/allJewellery', async (req, res) => {
            const result = await allJewellery.find().toArray();
            res.send(result);
        })
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log('jewellery servr running on port:', port)
})
