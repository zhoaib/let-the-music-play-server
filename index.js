const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('course api');
});

app.get('/courses-categories', (req, res) => {
    res.send(categories)
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const seletedCourse = courses.find(course => course.id === id);

});

app.listen(port, () => {
    console.log('let-the-music-server running on port', port);
});