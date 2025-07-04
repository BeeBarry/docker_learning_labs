FROM node

# This installs nodemon globally in the container, enabling "hot reload" since nodemon triggers restars of the container when code changes are detected.
RUN npm i -g nodemon

USER node

RUN mkdir /home/node/code

WORKDIR /home/node/code 

COPY --chown=node:node package-lock.json package.json ./

RUN npm ci

COPY --chown=node:node . .

CMD ["nodemon", "index.js"]

