# Zendesk Tickets Web Application

This is a simple web application that displays Zendesk tickets where a user is CC'd. The application is divided into a frontend (React app) and a backend (Node/Express app) component.

## Features

- Displays a list of Zendesk tickets where a predefined user is CC'd.
- Allows users to remove themselves from the CC list of individual tickets.

## Prerequisites

Before running the application, ensure you have the following prerequisites:

- Node.js (v14 or higher)
- Docker (if you plan to run the application in containers)

## Setup

1. Clone the repository:
```bash
git clone git@github.com:gondalhamza/leafworks-tickets-app.git
cd leafworks-tickets-app
```

2. Setup environment variables, 
Copy .env.example to create .env file in backend module and fill up the values


3. Running with Docker
To run the entire application using Docker:

```bash
docker-compose up
```
This will build and start both the frontend and backend containers.
Access the application in your web browser:

 - Frontend: http://localhost
 - Backend: http://localhost:3001

## Usage
- Visit http://localhost to access the Zendesk Tickets.
- The frontend lists tickets where the predefined user is CC'd.
- Click on Show Detail to see Ticket information in detail.
- Click the "Remove from CC" button to remove the user from the CC list of a ticket.

The provided token is having limited permissions. Error is coming up while removing user from CC'd list.
```bash
{
    "error": "Forbidden",
    "description": "You are missing the following required scopes: read"
}
```

---
## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
MIT License

Copyright (c) 2023 Hamza Zubair

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

