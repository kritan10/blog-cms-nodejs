# syntax=docker/dockerfile:1

FROM node:18-alpine3.17

USER 1000:1000

ENV NODE_ENV production

# For gateway
WORKDIR /usr/src/gateway
COPY ./package.json .
RUN npm install
COPY . .

CMD [ "node", "index.js" ]