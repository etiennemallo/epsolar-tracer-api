FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Install node_modules, build, clean
RUN npm install

RUN chmod +x run.sh

EXPOSE 3000

CMD [ "./run.sh" ]


# docker run -p 10000:3000 -p 10100:3100 --env-file .env --device /dev/ttyUSB0 -v /home/pirate/dashboard-debug/data:/usr/src/app/data --restart unless-stopped -d etiennemallo/dashboard-debug:armv7