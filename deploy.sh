#!/usr/bin/env bash

docker build --tag front /home/ubuntu/docker/front

docker run -d -p 3000:3000 --name front-container front
