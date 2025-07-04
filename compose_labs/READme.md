# Mission
- Click a button to send an HTTP request to the database and retrieve data of the number of tiems in the database.
 

- #### Technical components
  - API
  - Frontend server
  - Database service
 

- #### Tech stack
  - React + Parcel as frontend
  - NGINX as web server
  - MongoDB as database service

# Journey

#### Part 1 - API
- Initiating npm and installing required dependencies (Fastify + fastify/cors + mongodb)
- Now isntalling dependecies fro the web folder ( parcel + react + react-dom)
- Adding Dockerfiles for both the api and the web folders.
#### Part - Docker
- Creating docker-compose.yml file
- Building the docker compose ```docker compose up --build```

#### Bonus
- I could scale up the databases with this command ``` docker compose up --scale db=10```

