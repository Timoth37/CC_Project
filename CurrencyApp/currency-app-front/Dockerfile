FROM node:18-alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD npm run build

FROM nginx:1.23.3-alpine as server

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist/currency-app-front /usr/share/nginx/html
COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]







