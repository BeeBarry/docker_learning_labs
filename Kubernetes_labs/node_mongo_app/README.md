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
1. Created network via Docker CLI
2. Connected mongodb Database to the network

#### Part 3 - Node.js app
1. Add functionality in index.js
2. npm install fastify and mongodb
3. run fastify web server and check the increments by add request
4. Now lets make this work but in a docker container