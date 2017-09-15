FROM node:5.4
COPY package.json /src/package.json
WORKDIR /src
RUN npm install
COPY server.js /src
EXPOSE 8080
CMD ["node", "src/server.js"]