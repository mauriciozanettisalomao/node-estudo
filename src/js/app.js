const path = require('path');
const express = require('express');

/* Constants */
const port = 3000;
const publicFolderPath = path.join(__dirname, '../public');

/* Application */
const app = express();
app.use(express.static(publicFolderPath));

app.get('', (req, res)=> {
    res.send('<h1>Hello World</h1>');
});

app.get('/weather', (req, res)=> {
    res.send({
        forecast: 'Ensolarado', 
        location: 'Sao Paulo'
    });
});

app.get('*', (req, res)=> {
    res.send('<h1>Page not found!</h1>');
});

app.listen(port, ()=>{
    console.log('Server started on port '+port);
});