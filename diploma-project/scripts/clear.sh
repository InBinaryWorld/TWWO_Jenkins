#!/usr/bin/env bash
docker stop frontend-app
docker rm frontend-app

docker stop backend-app
docker rm backend-app

docker stop database
docker rm database

docker network rm docker-net
