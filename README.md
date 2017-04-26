# First steps with Docker

On this simple project I want to setup a self-contained basic NPM/Express/MongoDB application. It is just a try to make it work and understand Docker basic principles and execution commands.

The study case will be composed by a MERN (**M**ongoDB, **E**xpress, **R**eactJS, **N**odeJS) stack application that will be bundled on a docker container using the official MongoDB image. The application will make use of the database on an app that signups/authenticates users and displays a user management screen.

## Build container

docker build -t node-test:0.1 .

## Run container

docker run -ti node-test:0.1 

## Run container with docker-compose

docker-compose up