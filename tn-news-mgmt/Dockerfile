FROM node:14

RUN mkdir /tn-news-mgmt && mkdir /tn-news-mgmt/dist

WORKDIR /tn-news-mgmt

COPY package.json package-lock.json ./

RUN npm install --omit=dev 

COPY ./dist ./dist

EXPOSE 8080

CMD ["npm", "start"]