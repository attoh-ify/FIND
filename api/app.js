import express from 'express';
import apiRoute from './routes/api.route.js';

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use(('/api/'), apiRoute);

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
