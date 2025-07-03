# Multi-stage dockerfile to serve static web app

### Mission
A multistage dockerfile that builds the project in one container and serves it from another container using NGINX. 
As a BONUS I will bind mount my static files into the container which runs the NGINX server, this enables changes to be reflected immediately which is good for dev envs.


#### Steps
1. npx create-astro@latest (create new root "blue-belt")
2. npx astro add react (from blue-belt)
3. npx astro add tailwind (from blue-belt)
4. npm run dev
5. npm run build ( in order to create the /dist folder which is used in the dockerfile)
6. Now I build the image in terminal via Docker CLI ``` docker build -t astro-static-app . ```
7. And finally i run a container based on that image ``` docker run -it -p 8080:80 --name astro-app --rm --init astro-static-app```

##### BONUS step:
8. ```docker run -d --mount type=bind,source="$(pwd)"/dist/,target=/usr/share/nginx/html -p 8081:80 --name astro-app-dev nginx:latest```

#### Things I learned



![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

