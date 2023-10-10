# Creating first stage with compilation tools (node.js) and naming this stage as "builder"
# so we can reference this stage by the name during later stages
FROM node:alpine as builder

WORKDIR /app

COPY . .

# this produces compiled application in following location /app/dist
RUN npm install && npm run build


# STAGE 2: miminalistic image containing only nginx server + compiled application
# copied from the first stage. No source files nor Node.js executables included in STAGE 2.
FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/
