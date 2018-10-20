
const express = require('express');


const app = new express();



app.use(express.static('public'));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});