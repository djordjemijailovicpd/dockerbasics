FROM node:16.17.0-bullseye-slim

ARG SOME_ARG=world

RUN echo Hello ${SOME_ARG}

# needed to be able to gracefully stop node process on CTRL+C
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

WORKDIR /app

COPY index.js package.json ./

RUN npm install

ENV APP_NAME="Best app ever"

# needed to be able to gracefully stop node process on CTRL+C
ENTRYPOINT [ "dumb-init", "node", "index.js" ]
