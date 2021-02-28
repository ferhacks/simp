FROM node:14

# Create app directory
WORKDIR /botwsp

RUN apt-get update \
 && apt-get upgrade -y
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Europe/Moscow
RUN wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt install ./google-chrome-stable_current_amd64.deb -y
RUN apt-get install -y tzdata && \
    apt-get install -y \
    curl \
    python3 \
    python3-pip \
   sudo
   
RUN sudo apt-get --reinstall install screen \
    && rm -rf /var/lib/apt/lists/*
    
RUN chsh -s /bin/bash
ENV SHELL=/bin/bash
    
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

COPY . .

RUN mkdir ~/.screen \
&& chmod 700 ~/.screen

RUN export SCREENDIR=$HOME/.screen

# Workaround for screen: /usr/bin/screen cannot be installed with setgid "utmp": https://github.com/stucki/docker-cyanogenmod/issues/2
# Install screen with setuid root instead (that's ok on a single-user system)
RUN chmod u+s /usr/bin/screen
RUN chmod 755 /var/run/screen


RUN chmod +x ./start.sh
RUN chmod +x ./bashh.sh

CMD bash ./bashh.sh
