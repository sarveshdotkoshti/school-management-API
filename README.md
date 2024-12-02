# School Management API

A comprehensive RESTful API for managing school data, enabling users to add new schools and retrieve a list of schools sorted by proximity to their location. This project is built using **Node.js**, **Express.js**, and **MySQL**, focusing on practical applications in location-based services.

---

## Overview

The **School Management API** provides functionality for:
- **Adding new schools** with details such as name, address, latitude, and longitude.
- **Listing schools** based on proximity to a user’s current location, with results sorted based on geographical distance.

The project demonstrates core backend development principles, including working with databases, handling geolocation data, and creating clean RESTful APIs.

---

## Process

### 1. Planning
- Defined project goals and use cases.
- Designed the database schema for storing school information.

### 2. Database Setup
- Created a **MySQL** database to store school data.
- Set up a table `schools` with fields: `id`, `name`, `address`, `latitude`, and `longitude`.

### 3. API Development
- Developed two key APIs:
  - `/addSchool` (POST) for adding new schools to the database.
  - `/listSchools` (GET) for retrieving and sorting schools based on proximity to a given location.

### 4. Geolocation Sorting
- Implemented **Haversine formula** to calculate the distance between the user’s location and each school, then sorted the schools by distance.

### 5. Testing
- Used **Postman** to test and document the API endpoints.
- Handled edge cases like missing fields, invalid coordinates, and database errors.

### 6. Deployment
- Deployed the API to a live hosting platform (e.g., Heroku, AWS, or DigitalOcean).
- Ensured that environment variables were securely managed, especially for database credentials.

---

## Built With

- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Web framework for creating APIs in Node.js.
- **MySQL**: Relational database for storing school information.
- **Postman**: Used for API testing and documentation.
- **Haversine Formula**: To calculate geographical distance between two sets of latitude and longitude.

---

## What I Learned

1. **Backend Development**: 
   - Developed a RESTful API using Node.js and Express.js.
   - Integrated a MySQL database with Node.js using the `mysql2` package.
   
2. **Geolocation**: 
   - Applied the Haversine formula to calculate distances based on geographic coordinates.
   - Incorporated location-based sorting in API responses.

3. **Deployment**:
   - Deployed a Node.js application to a live server using a hosting platform (such as Heroku, AWS, etc.).
   - Learned to manage environment variables for secure handling of database credentials.

4. **Error Handling**:
   - Implemented data validation and error handling for input fields.
   - Ensured robust error messages and proper HTTP status codes.

5. **API Documentation**:
   - Used Postman to create a detailed collection for testing and sharing API endpoints.

---

## Useful Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Postman Learning Center](https://learning.postman.com/)
- [Haversine Formula Explanation](https://en.wikipedia.org/wiki/Haversine_formula)

---

## Live API Preview

You can interact with the live API hosted on [https://your-deployed-api-url.com](https://your-deployed-api-url.com).
