# Multi-stage dockerfile to serve static web app

### Mission
A multistage dockerfile that builds the project in one container and serves it from another container using NGINX. 

#### Steps
1. npx create-astro@latest (create new root "blue-belt")
2. npx astro add react (from blue-belt)
3. npx astro add tailwind (from blue-belt)
4. npm run dev
5. npm run build ( in order to create the /dist folder which is used in the dockerfile)
6. Now I build the image in terminal via Docker CLI ``` docker build -t astro_static_app . ```
7. And finally i run a container based on that image ``` docker run -it -p 8080:80 --name astro-app --rm --init astro_static_app```


![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

