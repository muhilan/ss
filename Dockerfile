FROM node:6.9.1-slim

EXPOSE 3000

LABEL MUHILAN SS

WORKDIR /usr/app

COPY package.json package.json
COPY index.js index.js

RUN npm install --production

CMD ["node", "index.js"]