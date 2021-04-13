FROM node:10-alpine as build
WORKDIR /app
ARG ANGULAR_ENVIRONMENT

COPY ["package.json", "."]
RUN echo $ANGULAR_ENVIRONMENT
RUN npm install
COPY [".", "/app"]

RUN npm run ng build -- --configuration $ANGULAR_ENVIRONMENT

FROM nginx:1.17.1-alpine
WORKDIR /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf ./*
COPY --from=build ["/app/dist/Web", "."]
ENTRYPOINT ["nginx", "-g", "daemon off;"]
