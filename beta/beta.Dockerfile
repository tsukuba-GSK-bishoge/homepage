FROM node:latest AS builder
WORKDIR /build
COPY . /build
RUN \
  npm install && \
  npm run build

FROM nginx:latest

ARG BASIC_USER
ARG BASIC_PASSWD

COPY --from=builder /build/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d
RUN apt-get update
RUN apt-get install -y apache2-utils
RUN echo ${BASIC_PASSWD} | htpasswd -i -c /etc/nginx/.htpasswd ${BASIC_USER}

EXPOSE 80
