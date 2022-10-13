FROM node:alpine

RUN mkdir /fe
RUN mkdir /be

#prep fe
WORKDIR /fe
COPY ./fe /fe
RUN npm run build
COPY /fe/build/ /be/build/

#prep be
WORKDIR /be
COPY ./be/package*.json /be
RUN npm install
COPY ./be /be

#run be
CMD ["node", "index.js"]
EXPOSE 8080