# Express Routing Lab 

### Node.js, Express
___

#### Assignment: Dive into how the Express router works to process HTTP requests. 


# Express Routing

## Agenda

* REST
* express http methods
* express pathing
* express pathing with params
* express router
* express response methods
* express body parser

## Test Pyramid

Server Testing crosses boundaries:

* Units: Server Internal Functions
  * Mock any integrations (like data fetching)
* Integration: How it connects to other services
  * Really connect to other services (hard dependencies)
* Acceptance
  * The server might be a dependency of some other test

## REST

Representational State Transfer (REST) is a software architecture
that puts constraints on our web applications. It gives us a style
to follow while constructing our APIs.

1. separate client and server
1. stateless
1. cacheable
1. uniform interface
1. layered system

* `POST /<resource>` - Create
  * create a new resource
* `GET /<resource>` - READ ALL
  * get a list of resource
* `GET /<resource>/:id` - READ ONE
  * get a resource by id
* `PUT /<resource>/:id` - UPDATE IN WHOLE
  * update a resource by id
* `PATCH /<resource>/:id` - UPDATE IN PART
 * partially update a resource by id
* `DELETE /<resource>/:id` DELETE ONE
  * delete a resource by id

## Express Methods

Different HTTP methods can be handled by express.

```js
// .METHOD('/path', requestHandler)
app.post('/my/path', (req, res) => {});
app.get('/my/path', (req, res) => {});
app.put('/my/path', (req, res) => {});
app.patch('/my/path', (req, res) => {});
app.delete('/my/path', (req, res) => {});
```

## Express Pathing

```js
app.get('/my/path', (req, res) => {});
app.put('/my/other/path', (req, res) => {});
```

## Express Pathing with Params

```js
app.get('/my/:path', (req, res) => {
  res.end(req.params.path)
});

app.put('/my/:other/path', (req, res) => {
  res.end(req.params.other)
});
```

## Express Router

```js
const { Router } = require('express');

module.exports = Router()
  .post('/my/path', (req, res) => {})
  .get('/my/path', (req, res) => {});
```

## Express Response Methods

res.send({ name: 'ryan' })

method        | description
------------- | -----------
`res.end`     | end the response with text
`res.json`    | end the response and send json
`res.send`    | end the response and automatically figure out the type

## Express Body Parser

```js
const express = require('express');
const app = express();

// parse incoming request data as JSON
app.use(express.json());
```
