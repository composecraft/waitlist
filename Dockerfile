FROM node:20-alpine as builder
WORKDIR /app
COPY . .
ARG REACT_APP_PUBLIC_POSTHOG_KEY
ENV REACT_APP_PUBLIC_POSTHOG_KEY $REACT_APP_PUBLIC_POSTHOG_KEY
ARG REACT_APP_PUBLIC_POSTHOG_HOST
ENV REACT_APP_PUBLIC_POSTHOG_HOST $REACT_APP_PUBLIC_POSTHOG_HOST
RUN npm install
RUN npm run build

FROM nginx:1.25.4-alpine-slim as prod
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf  /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]