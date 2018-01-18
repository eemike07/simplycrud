# simplycrud
Spring Boot + Spring Rest + MongoDB + Angular

Prereqs:
 - Mongo DB installed and running
 - Java 8+
 - Maven
 - Node & NPM




In this project, we have two services being deployed...  
Backend - Spring Boot App that listens for REST service calls and connects with mongodb with Spring Data  
Frontend - Display the data; emits REST calls to send/retrieve data from the backend.  

Don't have to worry about CORS filtering...this is handled.  

## Mongo DB  
Assuming mongodb is installed  
To start...  
`$ mongod`

## Frontend Service  
To start the frontend service...  
```
$ cd frontend/
$ npm install
$ npm start
```
Base Frontend URL: `http://localhost:4200`

## Backend Service

To start the backend service...
```
$ cd backend/
$ mvn spring-boot:run
```
You can use postman or curl to test backend service.  
Base URL: `http://localhost:8080/api/workers`  

### Available REST Calls

Get Workers  
- [GET] `http://localhost:8080/api/workers`  

Find Worker By Last Name (case-insensitive)  
- [GET] `http://localhost:8080/api/workers/find/${last_name_here}`  

Create Worker  
- [POST] `http://localhost:8080/api/workers`  
Example Body Params:  
```
{
	"id": "1",
	"firstName": "Bob",
	"lastName": "Saget",
	"middleInitial": "Z",
	"email": "bsaget@gmail.com",
	"phoneNumber": "8675309",
	"positionCategory": "Direct",
	"dateHired": "1284723984732",
	"addressOne": "Somewhere",
	"addressTwo": "Apt 1234",
	"city": "Memphis",
	"state": "TN",
	"zipCode": 12345,
	"isActive": true
}
```

Update Worker  
- [PUT] `http://localhost:8080/api/workers/${worker_id_here}`  
Example Body Params:  
```
{
	"firstName": "Bob",
	"lastName": "Saget",
	"middleInitial": "Z",
	"email": "bsaget@gmail.com",
	"phoneNumber": "8675309",
	"positionCategory": "Direct",
	"dateHired": "1284723984732",
	"addressOne": "Skyline Drive",
	"addressTwo": "Apt 5678",
	"city": "New York",
	"state": "NY",
	"zipCode": 12345,
	"isActive": true
}
```
Delete Worker  
- [DELETE] `http://localhost:8080/api/workers/${worker_id_here}`  

