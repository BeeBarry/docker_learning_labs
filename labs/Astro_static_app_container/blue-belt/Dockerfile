FROM node AS node-builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm build

FROM node:alpine
COPY --from=node-builder /app/dist /usr/share/nginx/html