FROM node:16 AS build-stage
ENV REACT_APP_BACKEND_URL http://localhost:3001/
WORKDIR /usr/src/app

COPY . .

RUN npm i

CMD ["npm", "start"]