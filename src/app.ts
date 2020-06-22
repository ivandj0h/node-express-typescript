import express, { response } from 'express';
import { request } from 'http';

const app = express();

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.listen(5000, () => console.log('Server Running...'))