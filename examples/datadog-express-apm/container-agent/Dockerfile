FROM node:20-alpine

RUN apk add --no-cache tini git

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn --pure-lockfile && yarn cache clean

COPY src ./src/
COPY server.js ./
COPY src/datadog.yaml /etc/datadog-agent/datadog.yaml
RUN chmod 644 /etc/datadog-agent/datadog.yaml

USER node

EXPOSE 8080

ENTRYPOINT ["/sbin/tini", "--"]
CMD [ "node", "server.js" ]
