
// Js Coding Stack Server

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

const data = require('./data.json');



app.get('/api/problem/:id', (req, res) => {

    const id = Number(req.params.id);
    const problem = data.problems.find(user => user.id == id);


    if (problem) {
        // If user is found, respond with the user data
        res.send(problem);
    } else {
        // If user is not found, respond with a 404 status code and a message
        res.status(404).json({ message: 'yor problem not found' });
    }

});

app.post('/feedback/submit', (req, res) => {
    console.log(req.body);
    res.status(200).send("Thank you for your valuable feedback");

});



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});