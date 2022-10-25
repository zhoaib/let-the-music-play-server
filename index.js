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

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    const category_course = courses.filter(course => course.id === id);
    res.send(category_course);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.id === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('let-the-music-server running on port', port);
});