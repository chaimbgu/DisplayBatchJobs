
const jobs = require('./Data/batchJobs.json')
const express = require('express')
const cors = require("cors");
var bodyParser = require('body-parser')
const app = express()
const port = 5000
app.use(cors({
  'allowedHeaders': ['Content-Type'],
  'origin': '*',
  'preflightContinue': true
}));
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({    
  extended: true
})); 

var nextId = Object.keys(jobs).reduce((number1, number2)=>Math.max(number1, number2), 0) + 1

app.get('/getJobsList',async function (req, res) {
  let jobsList = Object.keys(jobs).map((key) => {
        const {metadata, status} = jobs[key]
        return {id : key, metadata, status}
  })
  res.send(jobsList)
})

app.get('/getJobDetails/:id', async function(req, res){
    const id = Number(req.params.id)
    const {cmdCommand , logData} = jobs[id]
    res.send({cmdCommand ,logData})
})

app.post('/addBatchJob', async function(req, res){
    try {
        jobs[nextId] = req.body
        nextId ++
        res.status(200)
    } catch (error) {
        res.send({status: 500, error})
    }

})

app.put('/updateBatchJobStatus', async function(req, res){
    const { id , status} = req.body
    try {
        jobs[id].status = status
        res.status(200)
    } catch (error) {
        res.send({status: 500, error})
    }

})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})