
const express = require('express');
const expressEdge = require('express-edge');

const app = express();


app.use(express.static('public'));

app.use(expressEdge);


app.set('views', `${__dirname}/views`);
app.set('view engine', 'edge');

app.get('/', (req, res) => {
    res.render('index',  { title: 'Hey', message: 'Hello there!' });
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
    if (process.send) {
        process.send('online')
        
    }
});
