const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

const port = 3000;
const app = express();

app.listen(port, function () {
    console.log("Server is listening at port:" + port);
});

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Parses the text as json
app.use(bodyParser.json());

app.use('/api', api);

































































// const express = require('express')
// const app = express()
// const db=require('./db');

// const bodyParser = require('body-parser')
// app.use(bodyParser.json());

// const Person=require('./person');

// app.get('/', function (req, res) {
//   res.send('Welcome to the hotel... How can I help you ? we have list of menu')
// })

// app.post('/person', (req, res) => {
//     const data =req.body
//     const newPerson = new Person(data);
//     newPerson.save((error, savedPerson) => {
//         if(error){
//             console.log('Error saving person', error);
//             res.status(500).json({error: 'Internal server error'})
//         }
//         else{
//             console.log('Error saving person', error);
//             res.status(200).json(savedPerson);
//         }
//     }) 
// })

// app.listen(3000, ()=>{
//     console.log("Listening port 3000");
// })

