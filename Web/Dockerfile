FROM node:10-alpine as build-step
WORKDIR /app
COPY ["package.json", "./"]
RUN npm install
COPY [".", "/app"]
RUN npm run ng build

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/Web /usr/share/nginx/html
