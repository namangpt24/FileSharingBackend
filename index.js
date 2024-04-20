import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DbConnection from './database/db.js';

const app = express();

const PORT = 8080;

app.use(cors());
app.use('/',router);

DbConnection();

app.listen(PORT,()=>{
    console.log(`Server is started on Port ${PORT}`);
})