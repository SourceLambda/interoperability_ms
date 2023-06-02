FROM node:18-alpine

# Create app directory
WORKDIR /sourcelambda_int

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install --force

# Bundle app source
COPY . ./

EXPOSE 7070

CMD [ "npm", "start" ]