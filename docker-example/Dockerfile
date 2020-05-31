FROM alpine:latest
WORKDIR /app
COPY hello.sh /app
RUN chmod +x hello.sh
RUN apk update && apk add curl
CMD ["./hello.sh"]
