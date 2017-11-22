FROM node:carbon

WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

COPY . /app

EXPOSE 8081

CMD [ "npm", "start" ]
