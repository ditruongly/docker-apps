# Example Dockerfile from https://nodejs.org/de/docs/guides/nodejs-docker-webapp/

# Define what image to build from
FROM node:12.13.1-slim

# Create app directory to hold the application code inside the image
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Bind this app to port 8080
EXPOSE 8080

# Define the command to run this app using CMD
CMD [ "npm", "start" ]


