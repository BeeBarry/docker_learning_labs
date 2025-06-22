FROM node:22-alpine

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

ENV PORT=5001
ENV APP_NAME="My first container"

CMD [ "node", "src/index.js" ]