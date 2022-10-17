FROM node:alpine AS builder

WORKDIR /fe
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /fe/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]