import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

const add = (a: number, b: number): number => a ** b;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send(`Hasil dari 2 <sup>2</sup> adalah ${add(2, 2)}`);
});

app.listen(5000, () => console.log('Server Running...'))