FROM node:10.16.3

WORKDIR /use/src/app

COPY package-lock.json ./
COPY package.json ./

RUN npm ci

COPY . .

CMD ["node", "app.js"]
