FROM node:18-alpine AS base
WORKDIR /usr/src/app
COPY . .
RUN npm ci
ENV REACT_APP_BACKEND_URL http://localhost:3001/

FROM base as test
RUN CI=true npm test

FROM test as build
RUN npm run build

FROM nginx:1.21.1-alpine