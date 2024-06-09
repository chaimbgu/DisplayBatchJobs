
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

var nextId = Object.keys(jobs).reduce((number1, number2)=>Math.max(number1, number2), 0) +1
app.get('/getJobsList',async function (req, res) {
    console.log("blaaaa")
  let jobsList = Object.keys(jobs).map((key) => {
        const {metadata, status} = jobs[key]
        return {id : key, metadata, status}
  })
  res.send(jobsList)
})

app.get('/getJobDetails/:id', async function(req, res){
    const id = Number(req.params.id)
    console.log("got id" ,jobs[id])

    const {cmdCommand , logData} = jobs[id]
    res.send({cmdCommand ,logData})
})

app.post('/addBatchJob', async function(req, res){
    console.log("got id" ,nextId ,req.body)

    // const batchJobJson = JSON.parse(req.body)
    try {
        jobs[nextId] = req.body
        nextId ++
        console.log("ffff", jobs[nextId-1])
        res.status(200)
    } catch (error) {
        res.send({status: 500, error})
    }

})

app.put('/updateBatchJobStatus', async function(req, res){
    console.log("godt id" ,nextId ,req.body)
    const { id , status} = req.body
    // const batchJobJson = JSON.parse(req.body)
    try {
        jobs[id].status = status
        
        console.log("ffff", jobs[id])
        res.status(200)
    } catch (error) {
        res.send({status: 500, error})
    }

})

// app.put('/renameNode', (req, res) => {
//   let id = req.body.id
//   let newName = req.body.name
//   utils.renameNode(id, newName)
//   res.send()
// })

// app.post('/addChild', async function(req, res){
//   let parentId = req.body.id
//   let newChildName = req.body.name
//   await utils.addChild(parentId, newChildName)
//   res.send()
// })

// app.delete('/deleteNode/:id', async function (req, res) {
//   let id = req.params.id
//   await utils.deleteNode(id)
//   res.send()
// })

// app.get('/getTreesList', async function (req, res) {
//   let treesInfo = await utils.getTreesList()
//   res.send(treesInfo)
// })

// app.post('/addTree', async function (req, res) {
//   let treeName = req.body.treeName
//   await utils.addTree(treeName)
//   let treeNames = await utils.getTreesList()
//   res.send(treeNames)
// })

// app.delete('/deleteTree/:id', async function (req, res) {
//   let rootId = req.params.id
//   await utils.deleteTree(rootId)
//   let treeNames = await utils.getTreesList()
//   res.send(treeNames)
// })

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})