# simplycrud
Spring Boot + Spring Rest + MongoDB + Angular

Assumes you have mongo db installed and running

To start the backend service...
```
$ cd backend/
$ mvn spring-boot:run
```
You can use postman or curl to test backend service.
Base URL: `http://localhost:8080/api/workers`

## Available REST Calls

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

