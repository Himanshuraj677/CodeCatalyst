import express from 'express';
import dotenv from 'dotenv'

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get('/test', (_, res) => {
    res.send({message: "Server is working fine"});
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`)
})