FROM node:5.11.0-slim

RUN npm install -g nodemon
RUN npm install -g babel-cli
RUN npm install -g mocha

COPY package.json /package.json
RUN npm install && npm ls

COPY . /api

WORKDIR /api