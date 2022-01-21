#!/usr/bin/env bash
docker network create docker-net

docker run -d --net docker-net -e POSTGRES_DB='myapp' -e POSTGRES_USER='myapp' -e POSTGRES_PASSWORD='dbpass' --name database -p 5432:5432 postgres:14
docker run -d --net docker-net --name frontend-app -p 80:4200 frontend-app
sleep 1m && docker run -it -d --net docker-net --name backend-app -p 8080:8080 backend-app
