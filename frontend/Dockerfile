FROM node:16.17

WORKDIR /

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "start"]