## First steps with Docker

On this simple project I want to setup a self-contained basic NPM/Express/MongoDB application. It is just a try to make it work and understand Docker basic principles and execution commands.

## Build container

docker build -t node-test:0.1 .

## Run container

docker run -ti node-test:0.1 

## Run container with docker-compose

docker-compose up