const express = require('express');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', {title: 'My Homepage', message: 'Welcome to my website!'});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About Page', message: 'This is the about page!'});
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})