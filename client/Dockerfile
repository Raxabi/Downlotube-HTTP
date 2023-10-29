FROM node:21-bookworm

WORKDIR /client

COPY . .

EXPOSE 3000

RUN apt-get update
RUN apt-get install nginx --no-install-recommends -y

RUN npm install -g npm@latest
RUN npm install

RUN npm run build

CMD [ "nginx", "-g", "daemon off;" ]
