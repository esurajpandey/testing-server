import express from 'express';
import cors from 'cors';


const app = express();
const PORT = 3000;

const data = [];

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cors({
    origin: '*',
}))
// GET route
app.get('/api/data', (req, res) => {
    res.status(200).send({
        data,
        message : "Get request done",
        success : true,
    });
});

// POST route
app.post('/api/data', (req, res) => {
    const newItem = req.body;
    console.log(newItem);
    data.push(newItem);
    res.status(201).send({
        message : "Data has been created",
        success : true,
        data : newItem
    });
});

// PUT route
app.put('/api/data/:id', (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    data[id] = newData;
    res.status(200).send({
        message : "Data has been updated",
        success : true,
        data : newData
    });
});

// DELETE route
app.delete('/api/data/:id', (req, res) => {
    const id = req.params.id;
    data.splice(id, 1);
    res.sendStatus(204);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
