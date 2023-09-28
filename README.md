# Library API [API Documentation 🚀](https://documenter.getpostman.com/view/19528493/2s9YJZ458y)
Library API for **_Bosta_** Backend Engineer Assesment made with Nodejs,Postgres.

## Running The API 

Clone the project

```bash
git clone https://github.com/aminyasser/library-api.git
cd library-api
```
You must have docker and docker-compose installed.

```bash
docker-compose build
```
**Note**  : for simplicity there is migration service at ``docker-compose.yml`` that migrate to the database and seed the data to the database, you can enable it at the first time by add ``--profile`` flag.

```bash
 docker-compose --profile migrate-and-seed up 
```

If you run it again, you can normally do the command without it.
```bash
 docker-compose up 
```

## Database Diagram
<img  alt="Database"   src="diagram.png" draggable="false" />

## API Documentation

You can check out the postman documentation from [Here 🚀](https://documenter.getpostman.com/view/19528493/2s9YJZ458y)
Or import this [Postman Collection](https://github.com/aminyasser/library-api/blob/main/Library-API.postman_collection.json) to try locally.

### Requests
Books endpoints
```http
GET    /api/books
GET    /api/books/:id
GET    /api/books/search:query
POST   /api/books
PUT    /api/books/:id
DELETE /api/books/:id
```

Borrowers endpoints
```http
GET    /api/borrowers
GET    /api/borrowers/:id
POST   /api/borrowers
PUT    /api/borrowers/:id
DELETE /api/borrowers/:id
```

Borrowing Process endpointes

```http
GET    /api/borrowers/:borrower_id/books
POST   /api/borrowers/:borrower_id/checkout/:book_id
POST   /api/borrowers/:borrower_id/return/:book_id
```

System Reports
```http
GET  /api/books/overdue
```

### Responses

The structure of response 
```javascript
{
    "type": "success",
    "message": "message",
    "data": {
    }
}
```
In case of error
```http
{
    "type": "error",
    "message": "borrower is not defined",
    "error": {}
}
```

### Example Result
Example of search endpoint
```http
GET    /api/books/search/Ami
```
Example response
```javascript
{
    {
    "type": "success",
    "message": "you have 1 search results",
    "data": {
        "result": [
            {
                "id": 5,
                "title": "Math",
                "author": "Amin",
                "isbn": "1054",
                "quantity": 1,
                "shelf_location": "B2",
                "createdAt": "2023-09-27T03:11:48.802Z",
                "updatedAt": "2023-09-27T03:11:48.802Z"
            }
        ]
    }
}
}
```
