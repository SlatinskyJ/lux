FROM node:alpine

WORKDIR /be
COPY package*.json .
RUN npm install
COPY . .

CMD ["node", "index.js"]
EXPOSE 3000
