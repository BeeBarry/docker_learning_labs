FROM node AS node-builder
WORKDIR /app
COPY . .
RUN npm ci
ENV API_URL=http://localhost:8081/api
RUN npm run build

FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node-builder /app/dist /usr/share/nginx/html