FROM node:10-alpine as build-step
WORKDIR /app
COPY ["package.json", "./"]
RUN npm install
COPY [".", "/app"]

# docker configuration
RUN npm run-script build
# production configuration
# RUN npm prod

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/App /usr/share/nginx/html