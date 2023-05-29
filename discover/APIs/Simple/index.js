const express  = require('express');
const axios = require('axios');

const app = express()

app.listen('3000')

app.route('/').get( (req, res) => {

    axios.get('https://api.github.com/users/marc3gomes')
    .then(result => res.send(result.data))
    .catch(error => console.log(error))
})