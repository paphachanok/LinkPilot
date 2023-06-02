# LinkPilot

The goal of LinkPilots is to develop a web application that makes it simple for users to collect, organize, and distribute their links. Users frequently run into problems like forgetting to bookmark important websites or having trouble finding previously saved URLs.
<br>
<br>
Our main goal is to provide a user-friendly design that makes it easier to gather and organize connections. Additionally, we hope to offer a management tool that helps users properly cite their sources.


## Stack Technology

| Frontend | Backend | Database |
|----------|:-------:|:---------:|
| <img src="https://github.com/ARNE-08/Plannerable/assets/85389813/c2a0dada-bd94-459b-8635-a9f7f3b23886" width="200px"> | <img src="https://github.com/ARNE-08/Plannerable/assets/85389813/9c85557f-67a5-4dd2-a77b-0f3c5a3aae65" width="200px"> | <img src="https://github.com/ARNE-08/Plannerable/assets/85389813/2f5080da-52e9-426c-b1bf-899767c6c285" width="200px"> |
| | <img src="https://github.com/ARNE-08/Plannerable/assets/85389813/f6794638-1eb3-4558-9eab-758ae45547dc" width="200px"> | |

## Functions
- Create / Read / Update / Delete user's link list

## Database schema
![Database schema](frontend/src/assets/database_schema.png)

## To run the frontend and backend in developing mode
cd to backend then run.
```
    npm i
```
```
    npm run dev
```
cd to frontend then run
```
    npm i --force
```
```
    npm run dev
```

## API endpoints
### All of the responses will be wrapped with this data before sending
| Parameter | Type | Description |
|-----|:----:|:-----|
| success| boolean | the status of request|
| msg | string | message for each request |
| data | JSON | the actual data |

#### URL
<!-- Method /endpoint -->
`POST /login`

<!-- change to Request <TYPE> If you use parameters or query -->
#### Request Body
| Parameter | Type | Description |
|----------|:-------------:|:------|
|username|String|username
|password|String| password|


Example
```
   {
     "username" : "Tong",
     "password" : "1234"
   }


```

<!-- The response if success -->
#### Success
Response

<!--Status code (normally 200) -->
###### Status Code
<!-- STATUS BEHEAVIOR -->
` 200`  success

| Parameter | Type | Description |
|----------|:-------------:|:------|
|id|String| user id
|username|String| username|
|email|String| user email

Example
```
{
        "id": 9,
        "username": "Tong",
        "email": "a@gmail.com",
}

```
<!-- This is the special action of your end point (for example, sending the token) -->
**noted: If success, the Response will be sent with cookie named user**

#### URL
<!-- Method /endpoint -->
`POST /register`

<!-- change to Request <TYPE> If you use parameters or query -->
#### Request Body
| Parameter | Type | Description |
|----------|:-------------:|:------|
|email|String| email|
|password|String|password
|username|String|username



Example
```
   {
     "username" : "Tong",
     "email" : "a@gmail.com"
     "password" : "1234"
   }


```

<!-- The response if success -->
#### Success
Response

<!--Status code (normally 200) -->
###### Status Code
<!-- STATUS BEHEAVIOR -->
` 200`  success<br>
no response body

## CRUD operations
### Get all Links
#### URL
`GET /getAllLinks`

#### Request Body
No Request Body

#### Success

###### Status Code
` 200` success

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
| no parameter | Array of links | all links related to user |

#### links
the todo object
| Parameter | Type | Description |
|----------|:-------------:|:------|
| link_id | string | id of link |
| user_id | string | user id |
| title | string | link title |
| url | string | link url |
| description | string | link description |

Example
```
[
    {
        "id": 4,
        "user_id": 9,
        "title": "Link1",
        "url": "www.mockurl.com",
        "description": "Here's description",
    }
]

```

### Create Link
#### URL
`POST /createLink`

#### Request Body
| Parameter | Type | Description |
|----------|:-------------:|:------|
|user_id|String|user id|
|title|String|title|
|url|String|url|
|description|String| description (can be null)|

#### Success

###### Status Code
` 200`  success

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
|id|String| id of link|
|user_id|String| user id|
|title|String|title of link|
|url|String|url|
|description|String| description (can be null)|

Example
```
[
    {
        "id": 4,
        "user_id": 9,
        "title": "Link1",
        "url": "www.mockurl.com",
        "description": "Here's description",
    }
]

```

### Edit Link
#### URL
`PATCH /editLink`

#### Request Body
| Parameter | Type | Description |
|----------|:-------------:|:------|
|user_id|String|user id|
|title|String|title|
|url|String|url|
|description|String| description (can be null)|

#### Success

###### Status Code
` 200`  success

Response

| Parameter | Type | Description |
|----------|:-------------:|:------|
|id|String| id of link|
|user_id|String| user id|
|title|String|title of link|
|url|String|url|
|description|String| description (can be null)|

Example
```
[
    {
        "id": 4,
        "user_id": 9,
        "title": "Link1",
        "url": "www.mockurl.com",
        "description": "Here's description",
    }
]

```

### Delete Link
#### URL
`DELETE /deleteLink`

#### Request Body
| Parameter | Type | Description |
|----------|:-------------:|:------|
| id | String | id of link |

#### Success

###### Status Code
` 200`  success<br>

no response body


