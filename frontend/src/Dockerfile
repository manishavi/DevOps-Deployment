FROM node:5.4
COPY package.json package.json
WORKDIR /
RUN npm install
COPY webpack.config.js .
COPY src/* /src
EXPOSE 8080
CMD ["npm", "start"]
