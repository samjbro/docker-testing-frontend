FROM node:7.8.0

ENV NPM_CONFIG_LOG_LEVEL warn

COPY . .

RUN yarn

CMD yarn start

EXPOSE 3000