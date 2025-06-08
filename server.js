const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

const app = express();
const myPORT = process.env.PORT || 5000

// middle ware 
app.use(cors())
app.use(express.json())

// Route Connect
// const sampleRoutes - require('./routes/sample')
// app.use('/api/Sample', sampleRoutes)





app.listen(myPORT, function(){
    console.log('Test');

});

app.get('/test', function(req, res){
    res.send('test');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')

})