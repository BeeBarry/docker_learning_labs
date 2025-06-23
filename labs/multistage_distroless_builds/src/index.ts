import express from 'express';
const app = express();
const port = process.env.PORT;

app.get('/', (req,res) => {
    res.send(`Hello good friends, from ${process.env.APP_NAME}`);
});

app.listen(port, () => {
    console.log(`Server is listening on port : ${port}`);
});