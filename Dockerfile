FROM node:alpine

WORKDIR /app

COPY package.json /app
RUN npm install
RUN npm install express@^4.16.2 mongoose@^4.13.4 body-parser@^1.18.2 --save
COPY . /app

EXPOSE 8081

CMD node server.js
