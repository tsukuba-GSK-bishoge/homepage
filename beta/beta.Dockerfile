FROM node:latest AS builder
WORKDIR /build
COPY . /build
RUN \
  npm install && \
  npm run build

FROM nginx:latest
COPY --from=builder /build/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d
RUN echo '${BASIC_PASSWD}'  | htpasswd -i -c /etc/nginx/.htpasswd ${BASIC_USER}

EXPOSE 80
