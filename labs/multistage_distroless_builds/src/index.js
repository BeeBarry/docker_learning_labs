// replica from express_container build
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT;
const users = [];
app.use(bodyParser.json());




app.get('/', (req,res) => {
    res.send(`Hello good friends, from ${process.env.APP_NAME}`);
});

// Get Requests
app.get('/users', (req,res) => {
    return res.json({users: users});
});

// Post requests

app.post('/users', (req,res) => {
    const newUserId = req.body.userId;
    if (!newUserId) {
        return res.status(400).send('missing userId');
    }
    if (users.includes(newUserId)) {
        return res.status(400).send('User already exists.');
    }

    users.push(newUserId);
    return res.status(201).send('User now registered.')
})


app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});