FROM node:7.7.3

RUN apt-get update && apt-get install apt-transport-https

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install yarn

COPY ./package.json /root/
WORKDIR /root

RUN yarn
ENV NODE_PATH /root/node_modules

COPY . /root/src/

WORKDIR /root/src

EXPOSE 3000
EXPOSE 5858

CMD [ "node", "--harmony-async-await", "app.js"]