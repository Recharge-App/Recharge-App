FROM node:16

EXPOSE 19000 19001 19002 19006

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH

RUN npm i --unsafe-perm -g npm@latest expo-cli@latest
RUN npm i -g yarn

RUN mkdir /opt/react_native_app && chown node:node /opt/react_native_app
WORKDIR /opt/react_native_app
RUN mkdir src
USER node
COPY ./package.json ./package-lock.json ./App.tsx ./babel.config.js ./metro.config.js ./react-native.config.js ./.svgrrc ./tsconfig.json ./yarn.lock ./
COPY ./assets ./assets
RUN yarn install

CMD ["expo", "start"]
