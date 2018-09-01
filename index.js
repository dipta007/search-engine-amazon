var elasticSearch = require('./elastic-search/elastic')
var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('Hello from dipta007\nGo to Products to get the whole list');
})

app.get('/products', function(req, res) {
    elasticSearch.getAll('amazon', 'producttitle').then((response) => {
        console.log(response)
        var products = []
        response.hits.hits.forEach((item) => {
            products.push(item._source.title)
        })
        res.send(products)
    })
})

app.get('/products/:src', function(req, res) {
    elasticSearch.search('amazon', 'producttitle', req.params.src).then((response) => {
        console.log(req.params.src)
        console.log(response)
        var products = []
        response.hits.hits.forEach((item) => {
            products.push(item._source.title)
        })
        res.send(products)
    })
})

var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("Listening on ", host, port)
})