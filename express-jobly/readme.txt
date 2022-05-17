Post request Register a user
http://localhost:3001/auth/register
{
 "username": "rs",
 "password": "rspass",
 "firstName": "rama",
 "lastName": "srinivas",
 "email": "ramasrini1@gmail.com"
}

Returns:
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY1MjE0NzY3MH0.engidSKh8dhWrQMNH5N7_TOn79qGjmdfkGRQbA5u6bw"
}

Get request get info about all users
http://localhost:3001/users
Headers
Key: authorization 
Value: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY1MjE0NzY3MH0.engidSKh8dhWrQMNH5N7_TOn79qGjmdfkGRQbA5u6bw

Returns:
{
    "users": [
        {
            "username": "rs",
            "firstName": "rama",
            "lastName": "srinivas",
            "email": "ramasrini1@gmail.com",
            "isAdmin": false
        },
        {
            "username": "testadmin",
            "firstName": "Test",
            "lastName": "Admin!",
            "email": "joel@joelburton.com",
            "isAdmin": true
        },
        {
            "username": "testuser",
            "firstName": "Test",
            "lastName": "User",
            "email": "joel@joelburton.com",
            "isAdmin": false
        }
    ]
}

Get request using username
http://localhost:3001/users/rs
Headers
Key: authorization 
Value: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY1MjE0NzY3MH0.engidSKh8dhWrQMNH5N7_TOn79qGjmdfkGRQbA5u6bw

Returns:
{
    "user": {
        "username": "rs",
        "firstName": "rama",
        "lastName": "srinivas",
        "email": "ramasrini1@gmail.com",
        "isAdmin": false
    }
}

Patch request to update user
http://localhost:3001/users/rs

Headers
Key: authorization 
Value: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY1MjE0NzY3MH0.engidSKh8dhWrQMNH5N7_TOn79qGjmdfkGRQbA5u6bw

Body contains fields to update( Only those fields will be updated)
{    
    "firstName": "rama2",
    "lastName": "srinivas2"      
}

Returns:
{
    "user": {
        "username": "rs",
        "firstName": "rama2",
        "lastName": "srinivas2",
        "email": "ramasrini1@gmail.com",
        "isAdmin": false
    }
}


Get all users
http://localhost:3001/users

Headers
Key: authorization 
Value: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY1MjE0NzY3MH0.engidSKh8dhWrQMNH5N7_TOn79qGjmdfkGRQbA5u6bw

Returns:
{
    "users": [
        {
            "username": "rs",
            "firstName": "rama2",
            "lastName": "srinivas2",
            "email": "ramasrini1@gmail.com",
            "isAdmin": false
        },
        {
            "username": "testadmin",
            "firstName": "Test",
            "lastName": "Admin!",
            "email": "joel@joelburton.com",
            "isAdmin": true
        },
        {
            "username": "testuser",
            "firstName": "Test",
            "lastName": "User",
            "email": "joel@joelburton.com",
            "isAdmin": false
        }
    ]
}

http://localhost:3001/auth/register
{
 "username": "ss",
 "password": "sspass",
 "firstName": "sumana",
 "lastName": "srinivas",
 "email": "ssrini1@gmail.com"
}
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNzIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY1MjE5NzExN30.85LCXFvwzZtMQEXmRiCaLbaLDTWPOqSnzLIEJ_P53qE"
}

Get Request to get companies filter params passed through query string
Filter by maxEmployees, minEmployees by name case insitive and should be part 
not extact match
http://localhost:3001/companies?minEmployees=20&maxEmployees=60&name=Wells

Headers:
Key: authorization 
Value: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY1MjE0NzY3MH0.engidSKh8dhWrQMNH5N7_TOn79qGjmdfkGRQbA5u6bw

Returns
{
    "companies": [
        {
            "handle": "carr-wells-jones",
            "name": "Carr, Wells and Jones",
            "description": "Human medical throw book pick possible. Maybe yeah word beat treatment impact campaign.",
            "numEmployees": 27,
            "logoUrl": "/logos/logo3.png"
        }
    ]
}

Post request to create a new company
http://localhost:3001/companies

{
              "handle": "myr",
              "name": "MYR",
              "description": "Desc1",
              "numEmployees": 1,
              "logoUrl": "http://c1.img"
}

Use admin token in the header 
authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RhZG1pbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjI4MjIzNH0.szKDtgIgVV8-MAptKgYt5vrM9CLpf41fkQwc7q0rN5c
------------------------------------------------------------------

Post Request to get token. 
This is an admin user which was entered in the db
through the seed file. username is testadmin and password is password
http://localhost:3001/auth/token
Request Body
{
    "username": "testadmin",
    "password": "password"
}

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RhZG1pbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjI4MjIzNH0.szKDtgIgVV8-MAptKgYt5vrM9CLpf41fkQwc7q0rN5c"
}

Patch Request to change company details
Need to pass in admin token in the header
http://localhost:3001/companies/willis-henson-miller

Body should contain
{
  "name": "Willis, Henson and Miller",
  "description": "About dream practice. Father significant senior health within four.",
  "numEmployees": 821,
  "logoUrl": null
}


-------------------------------
Job Routes:
Create a new Job: Post Request
http://localhost:3001/jobs
In the header
authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RhZG1pbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjI4MjIzNH0.szKDtgIgVV8-MAptKgYt5vrM9CLpf41fkQwc7q0rN5c

body 
{ 

     "title": "Software Front End Engineer", 
     "salary": 500,
     "equity": "0.1",
     "companyHandle": "hall-davis"
 }

 Response
 {
    "job": {
        "id": 203,
        "title": "Software Front End Engineer",
        "salary": 500,
        "equity": "0.1",
        "companyHandle": "hall-davis"
    }
}
 
To apply for job:
Permission user or admin logged in
http://localhost:3001/users/rs/jobs/134

Header token
authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RhZG1pbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjI4MjIzNH0.szKDtgIgVV8-MAptKgYt5vrM9CLpf41fkQwc7q0rN5c

Response
{
    "applied": 134
}

token for user:
{
 "username": "dd",
 "password": "ddpass",
 "firstName": "ddname",
 "lastName": "ddsrinivas",
 "email": "ramasrini1@gmail.com"
}

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRkIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY1MjczMzcwMH0.9pyt6v63Rc7-wv8gm9ZyZx2SIq1Z9k2gqORVj7kTSu4"
}

//Get users with job applications features added
Get Request, Authorization admin or user token
http://localhost:3001/users/dd
Response:
{
    "user": {
        "username": "dd",
        "firstName": "ddname",
        "lastName": "ddsrinivas",
        "email": "ramasrini1@gmail.com",
        "isAdmin": false,
        "jobs": [
            36,
            200
        ]
    }
}
