# syntax=docker/dockerfile:1

FROM node:18-alpine3.17

USER 1000:1000

ENV NODE_ENV production

# For server
WORKDIR /usr/src/server
COPY ./package.json .
RUN npm install
COPY . .

CMD ["/bin/sh", "-c", "echo 'Performing migration'; npx sequelize-cli db:migrate; npx sequelize-cli db:seed:all; echo 'Migration complete'; NODE_ENV=production; node server; "]


