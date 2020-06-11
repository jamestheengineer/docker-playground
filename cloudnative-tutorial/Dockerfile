FROM alpine:latest
RUN apk update && apk add curl
WORKDIR /app
COPY hello.sh /app
RUN chmod +x hello.sh
COPY hello.txt /app
COPY bye.txt /app
CMD ["./hello.sh"]
