# A Simple Search Engine for Amazon products

A search engine based on elastic search on the 1M scrapped amazon products

## Getting Started

Used 1 GOOGLE Compute Engine for backend server  
f1-micro (1 vCPU, 0.6 GB memory) - 4.28$/month  
It is used as the backend API centre for the whole search engine

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

* [Express](http://www.dropwizard.io/1.0.2/docs/) - The web framework
* [ElasticSearch](https://maven.apache.org/) - Dependency Management
* [NodeJS](https://rometools.github.io/rome/) - MAin engine behind backend

## Authors

* **Shubhashis Roy Dipta** - *Initial work* - [dipta007](https://github.com/dipta007)
