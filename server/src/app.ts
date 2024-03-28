import express from 'express';
import cors from 'cors';
import config from './config/config';


const app= express();
const port = config.PORT || 3000;

app.use(cors({
    origin: ['http://localhost:4200']
}));

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
