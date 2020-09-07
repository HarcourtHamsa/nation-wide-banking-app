# get base image or parent image
FROM node:10.16-alpine

# set working directory
WORKDIR /usr/src/app/client

# copy package.json from my current location to my working directory
COPY package*.json ./

# install dependencies , including React
RUN npm install --silent

# copy every file from my local machine to /usr/src/app
COPY . .

# expose docker port 3000
EXPOSE 3000

# start app
CMD ["npm", "start"]