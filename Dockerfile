FROM node:16-alpine as node
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/ng-shopping-list-and-recipes /usr/share/nginx/html