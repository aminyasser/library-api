# Library API
Library API for **_Bosta_** Backend Engineer Assesment made with Nodejs,Postgres

## Running The API 

You must have docker and docker-compose installed.

```bash
docker-compose up
```

## API Documentation

### Requests
Books endpoints
```http
GET    {HOST}/api/books
GET    {HOST}/api/books/:id
GET    {HOST}/api/books/search:query
POST   {HOST}/api/books
PUT    {HOST}/api/books/:id
DELETE {HOST}/api/books/:id
```

Borrowers endpoints
```http
GET    {HOST}/api/borrowers
GET    {HOST}/api/borrowers/:id
POST   {HOST}/api/borrowers
PUT    {HOST}/api/borrowers/:id
DELETE {HOST}/api/borrowers/:id
```

Borrowing Process endpointes

```http
GET    {HOST}/api/borrowers/:borrower_id/books
POST   {HOST}/api/borrowers/:borrower_id/checkout/:book_id
POST   {HOST}/api/borrowers/:borrower_id/return/:book_id
```

System Reports
```http
GET  {HOST}/api/books/overdue
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

### Example
Example of success
```http
GET    {HOST}/api/books/search/Ami
```
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
