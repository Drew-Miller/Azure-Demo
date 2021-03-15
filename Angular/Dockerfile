FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

# docker configuration
RUN npm run build -- --configuration=docker

# production configuration
# RUN npm run build -- --configuration=production

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/App /usr/share/nginx/html