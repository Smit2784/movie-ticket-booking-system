# API Documentation

The Movie Ticket Booking System API provides endpoints for user authentication, movie management, theater operations, and booking functionality.

## Base URL

```
http://localhost:5000/api
```

## Authentication

Most endpoints require authentication. Include the JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### Authentication

#### Register User
```http
POST /api/auth/register
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "9876543210"
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

#### Login User
```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Movies

#### Get All Movies
```http
GET /api/movies
```

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `genre` (optional): Filter by genre
- `language` (optional): Filter by language
- `search` (optional): Search by title

**Response:**
```json
{
  "success": true,
  "data": {
    "movies": [...],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 50,
      "pages": 5
    }
  }
}
```

#### Get Movie by ID
```http
GET /api/movies/:id
```

#### Create Movie (Admin Only)
```http
POST /api/movies
```

**Request Body:**
```json
{
  "title": "Avengers: Endgame",
  "description": "The epic conclusion to the Infinity Saga.",
  "genre": ["Action", "Adventure", "Drama"],
  "duration": 181,
  "rating": "PG-13",
  "releaseDate": "2019-04-26",
  "language": "English",
  "director": "Anthony Russo, Joe Russo",
  "cast": ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"]
}
```

### Theaters

#### Get All Theaters
```http
GET /api/theaters
```

**Query Parameters:**
- `city` (optional): Filter by city
- `movieId` (optional): Get theaters showing specific movie

#### Get Theater by ID
```http
GET /api/theaters/:id
```

#### Get Shows for Theater
```http
GET /api/theaters/:id/shows
```

**Query Parameters:**
- `date` (required): Show date (YYYY-MM-DD)
- `movieId` (optional): Filter by movie

### Bookings

#### Create Booking
```http
POST /api/bookings
```

**Request Body:**
```json
{
  "showId": "show-id",
  "seats": ["A1", "A2"],
  "paymentMethod": "credit_card",
  "totalAmount": 500
}
```

#### Get User Bookings
```http
GET /api/bookings/my-bookings
```

#### Get Booking by ID
```http
GET /api/bookings/:id
```

#### Cancel Booking
```http
PUT /api/bookings/:id/cancel
```

### Payments

#### Process Payment
```http
POST /api/payments/process
```

**Request Body:**
```json
{
  "bookingId": "booking-id",
  "paymentMethod": "credit_card",
  "amount": 500,
  "paymentDetails": {
    "cardNumber": "4111111111111111",
    "expiryMonth": "12",
    "expiryYear": "2025",
    "cvv": "123"
  }
}
```

#### Verify Payment
```http
POST /api/payments/verify
```

### Admin Endpoints

#### Get Dashboard Stats
```http
GET /api/admin/dashboard
```

#### Get All Users
```http
GET /api/admin/users
```

#### Get All Bookings
```http
GET /api/admin/bookings
```

## Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "message": "Error description",
  "stack": "Error stack trace (development only)"
}
```

### HTTP Status Codes

- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `422` - Validation Error
- `500` - Internal Server Error

## Rate Limiting

API requests are limited to 100 requests per 15 minutes per IP address.

## File Uploads

For file uploads (movie posters, user avatars), use multipart/form-data:

```http
POST /api/movies/:id/poster
Content-Type: multipart/form-data

--boundary
Content-Disposition: form-data; name="poster"; filename="poster.jpg"
Content-Type: image/jpeg

[binary data]
--boundary--
```

Supported formats: JPG, PNG, WebP
Max file size: 5MB
