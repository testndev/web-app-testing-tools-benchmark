# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.34.3-focal
 
# Set the work directory for the application
WORKDIR /app
 
# Set the environment path to node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH

# COPY the needed files to the app folder in Docker image
COPY . /app/

# Get the needed libraries to run Playwright
## RUN apt-get update && apt-get -y install libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev

RUN apt-get update

EXPOSE 9323

# Install the dependencies in Node environment
RUN npm run init:pw
