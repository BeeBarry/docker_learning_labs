## Mission
* Starting with a Node.js app with simple functionality.
* Adding volumes in order to fulfill the app functionality and have persistent data.
* Configuring a network so the container can speak with the volume.
* Adding Kubernetes in order to scale (load balancing as well)

## Journey
#### Part 1 - Adding Volume
1. Installed npm
2. Added fucntionality to index.js
3. Made a simple Dockerfile
4. Built image and spinned up a container with it
5. Added volume to the container for persistent data

#### Part 2 - Network
1. Created network via Docker CLI ``` docker network create driver=bridge app-net```
2. Connected mongodb database to the network ```docker run -d --network=app-net -p 27017:27017 --name=db mongo ```
3. 

#### Part 3 - Node.js app
1. Add functionality in index.js
2. npm install fastify and mongodb
3. run fastify web server and check the increments by add request (on host)
4. Now lets make this work but in a docker container by adding a dockerfile
5. Building docker image for this node app
6. The connection string in index.js points to localhost, so to make this work in docker containers and docker network I will pass an -env variable in my dock run command. ``` docker run -p 8080:8080 --network=app-net --init --env MONGO_CONNECTION_STRING=mongodb://db:27017 app-with-mongo```
7. TA-DA! I add increments by putting "/add" at the end of the URL, then I quit and turn back on the db and the container and the data is persistent!