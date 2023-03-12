FROM node:18-alpine
# FROM node:17-alpine - pull image - imagine this as git pull origin node:17-alpine

# nodemon - this is the package for live reload
# RUN npm install -g nodemon

RUN mkdir -p /app

# This is where the docker will run the COMMANDS (eg RUN npm install)
WORKDIR /app

# to the /app working directory
COPY package*.json /app

# Commands run to install packages needed for this project during building of image
# This needs to be run on the WORKDIR folder or where the source code is being copied using COPY . .
RUN npm install

# Copy First period is current directory and second is where to paste it
COPY . /app

# required for docker desktop port mapping
EXPOSE 3000

# This allows us to run the commands when the container is running
CMD ["npm", "run", "dev"]
