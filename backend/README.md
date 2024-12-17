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

## POST /users/login

**Description:** Log in an existing user.

### Request Body

- `email` (string, **required**): Email address of the user. Must be a valid email.
- `password` (string, **required**): Password for the user account. Must be at least 6 characters long.

### Response Status Codes

- **200 OK**
  - **Description:** User logged in successfully.
  - **Body:**
    - `token` (string): Authentication token.
    - `user` (object): Logged-in user details.
- **400 Bad Request**
  - **Description:** Validation errors occurred.
  - **Body:**
    - `errors` (array): List of validation error messages.
- **401 Unauthorized**
  - **Description:** Invalid email or password.
  - **Body:**
    - `message` (string): Error message indicating invalid credentials.

### Example Request

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example Response (200 OK)

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

### Example Response (401 Unauthorized)

```json
{
  "message": "Invalid Email or Password"
}
```

### GET /users/profile

Retrieves the profile of the authenticated user.

- **URL**: `/users/profile`
- **Method**: `GET`
- **Headers**:
  - `Authorization`: `Bearer <token>`
- **Success Response**:
  - **Status**: `200 OK`
  - **Body**:
    ```json
    {
      "id": "user_id",
      "email": "user@example.com",
      "fullname": {
        "firstname": "First",
        "lastname": "Last"
      }
      // ...other user fields...
    }
    ```
- **Error Response**:
  - **Status**: `401 Unauthorized`
  - **Body**:
    ```json
    {
      "error": "Authentication required."
    }
    ```

### GET /users/logout

Logs out the authenticated user.

- **URL**: `/users/logout`
- **Method**: `GET`
- **Headers**:
  - `Authorization`: `Bearer <token>`
- **Success Response**:
  - **Status**: `200 OK`
  - **Body**:
    ```json
    {
      "message": "User logged out successfully."
    }
    ```
- **Error Response**:
  - **Status**: `401 Unauthorized`
  - **Body**:
    ```json
    {
      "error": "Authentication required."
    }
    ```

## POST /captains/register

**Description:** Register a new captain.

### Request Body

- `fullname.firstname` (string, **required**): First name of the captain. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): Last name of the captain.
- `email` (string, **required**): Email address of the captain. Must be a valid email.
- `password` (string, **required**): Password for the captain account. Must be at least 6 characters long.
- `vehicle.color` (string, **required**): Color of the vehicle. Must be at least 3 characters long.
- `vehicle.plate` (string, **required**): License plate of the vehicle. Must be at least 3 characters long.
- `vehicle.capacity` (integer, **required**): Capacity of the vehicle. Must be at least 1.
- `vehicle.vehicleType` (string, **required**): Type of the vehicle. Must be one of `car`, `motorcycle`, or `auto`.

### Response Status Codes

- **201 Created**
  - **Description:** Captain registered successfully.
  - **Body:**
    - `token` (string): Authentication token.
    - `captain` (object): Registered captain details.
- **400 Bad Request**
  - **Description:** Validation errors occurred.
  - **Body:**
    - `errors` (array): List of validation error messages.

### Example Request

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Response (201 Created)

```json
{
  "token": "your-jwt-token",
  "captain": {
    "_id": "captain-id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
    // ...other captain fields...
  }
}
```

### Example Response (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
    // ...other error messages...
  ]
}
```

## POST /captains/login

**Description:** Log in an existing captain.

### Request Body

- `email` (string, **required**): Email address of the captain. Must be a valid email.
- `password` (string, **required**): Password for the captain account. Must be at least 6 characters long.

### Response Status Codes

- **200 OK**
  - **Description:** Captain logged in successfully.
  - **Body:**
    - `token` (string): Authentication token.
    - `captain` (object): Logged-in captain details.
- **400 Bad Request**
  - **Description:** Validation errors occurred.
  - **Body:**
    - `errors` (array): List of validation error messages.
- **401 Unauthorized**
  - **Description:** Invalid email or password.
  - **Body:**
    - `message` (string): Error message indicating invalid credentials.

### Example Request

```json
{
  "email": "jane.doe@example.com",
  "password": "password123"
}
```

### Example Response (200 OK)

```json
{
  "token": "your-jwt-token",
  "captain": {
    "_id": "captain-id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
    // ...other captain fields...
  }
}
```

### Example Response (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
    // ...other error messages...
  ]
}
```

### Example Response (401 Unauthorized)

```json
{
  "message": "Invalid Email or Password"
}
```

## GET /captains/profile

**Description:** Retrieve the profile of the authenticated captain.

- **URL**: `/captains/profile`
- **Method**: `GET`
- **Headers**:
  - `Authorization`: `Bearer <token>`

### Success Response

- **Status**: `200 OK`
- **Body**:

  ```json
  {
    "captain": {
      "_id": "captain-id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
      // ...other captain fields...
    }
  }
  ```

### Error Response

- **Status**: `401 Unauthorized`
- **Body**:

  ```json
  {
    "error": "Authentication required."
  }
  ```

## GET /captains/logout

**Description:** Log out the authenticated captain.

- **URL**: `/captains/logout`
- **Method**: `GET`
- **Headers**:
  - `Authorization`: `Bearer <token>`

### Success Response

- **Status**: `200 OK`
- **Body**:

  ```json
  {
    "message": "Captain logged out successfully."
  }
  ```

### Error Response

- **Status**: `401 Unauthorized`
- **Body**:

  ```json
  {
    "error": "Authentication required."
  }
  ```