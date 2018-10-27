# define from what image we want to build from 
FROM node:8

# create directory to hold the app code
WORKDIR /usr/src/app


# install dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# port
EXPOSE 3000

# start app
CMD ["npm", "start"]

