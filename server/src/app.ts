import express from 'express';
import cors from 'cors';
import config from './config/config';
import beerRoutes from './routes/beerRoutes';

const app= express();
const port = config.PORT || 3000;

app.use(cors({
    origin: ['http://localhost:4200']
}));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/beer', beerRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
