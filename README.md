# A Simple Search Engine for Amazon products

A search engine based on elastic search on the 1M scrapped amazon products

## Getting Started

* Used 1 GOOGLE Compute Engine for backend server  
f1-micro (1 vCPU, 0.6 GB memory) - 4.28$/month  
It is used as the backend API centre for the whole search engine

* Used 1 GOOGLE Compute Engine for the storage  
Custom(2 vCPU, 4.75 GB memory) - 45/10$/month  
It is the used as the backend storage for the search engine.  
Used ElasticDB as the storage.

## API

* All Products: http://35.231.155.213:8080/products 
* Full text search: http://35.231.155.213:8080/products/:searchText  
                    (:searchText will be replaced by the actual search text)

### Prerequisites

```
NodeJS
ElasticDB
```

### Installing

At first go to the folder and run

```
npm install
```

And repeat

```
npm start
```

It will start the server on localhost:8080

## Built With

* [NodeJS](http://nodejs.org/) - MAin engine behind backend
* [Express](http://expressjs.com/) - The web framework
* [ElasticSearch](https://www.elastic.co/) - Dependency Management

## Authors

* **Shubhashis Roy Dipta** - *Initial work* - [dipta007](https://github.com/dipta007)
