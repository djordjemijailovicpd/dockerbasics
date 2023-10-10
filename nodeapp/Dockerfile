FROM node:20-alpine3.17

ARG SOME_ARG=world

RUN echo Hello ${SOME_ARG}

WORKDIR /app

COPY index.js package.json ./

RUN npm install

ENV APP_NAME="Best app ever"

ENTRYPOINT [ "node", "index.js" ]
