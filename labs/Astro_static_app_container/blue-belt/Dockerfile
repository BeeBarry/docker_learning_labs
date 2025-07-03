# First step where I build
FROM node AS node-builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# Second step that serves, note the slimmed alpine version.
# Since in the first step we instruct npm to build, Astro creates a folder called /dist from which we copy the content thats been built.
FROM nginx:alpine
COPY --from=node-builder /app/dist /usr/share/nginx/html