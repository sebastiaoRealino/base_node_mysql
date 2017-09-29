FROM node:6.11.0

COPY package.json /

RUN npm install --silent --progress=false
RUN npm install -g nodemon
RUN npm install -g babel-cli

COPY . /app

WORKDIR /app