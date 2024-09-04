FROM node:current-alpine3.20
# // USER 1000
WORKDIR /app
EXPOSE 4200
RUN npm i -g @angular/cli