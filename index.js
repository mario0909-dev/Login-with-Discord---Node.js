
const path = require('path');
const express = require('express');



app.use('', express.static(path.join(__dirname, 'public')));


app.get('/', (request, response) => {
    return response.sendFile('index.html', { root: '.' });
});

app.get('/auth/discord', (request, response) => {
    console.log(request.body);
    return response.sendFile('cookie.html', { root: '.' });
});

const port = '53134';

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
