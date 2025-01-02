FROM node:21-alpine3.19 AS builder

WORKDIR /code

COPY yarn.lock tailwind.config.js styles.css postcss.config.js package.json ./
RUN yarn install
COPY src/ src/
RUN yarn run build

FROM nginx

COPY --from=builder /code/src/ /usr/share/nginx/html