
# Backend API Documentation

## POST /users/register

**Description:** Register a new user.

### Request Body

- `fullname.firstname` (string, **required**): First name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): Last name of the user.
- `email` (string, **required**): Email address of the user. Must be a valid email.
- `password` (string, **required**): Password for the user account. Must be at least 6 characters long.

### Response Status Codes

- **201 Created**
  - **Description:** User registered successfully.
  - **Body:**
    - `token` (string): Authentication token.
    - `user` (object): Registered user details.
- **400 Bad Request**
  - **Description:** Validation errors occurred.
  - **Body:**
    - `errors` (array): List of validation error messages.

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example Response (201 Created)

```json
{
  "token": "your-jwt-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // ...other user fields...
  }
}
```

### Example Response (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    }
    // ...other error messages...
  ]
}
```