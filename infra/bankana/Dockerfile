FROM node:lts-bookworm-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN apt-get -y update
RUN apt-get -y install git

COPY . .

CMD ["npm", "run", "dev"]
