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

app.listen(port, () => {
    console.log('jewellery servr running on port:', port)
})
