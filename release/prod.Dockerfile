FROM node:latest AS builder
WORKDIR /build
COPY . /build
RUN \
  npm install && \
  npm run build

FROM nginx:latest
COPY --from=builder /build/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /usr/share/nginx
RUN \
  ls -la ./nginx && \
  cat ./nginx/.htpasswd && \
  cd not_exists_dir
COPY ./nginx/.htpasswd /etc/nginx

EXPOSE 80
