#!/usr/bin/env bash
docker build -t database ../db
docker build -t frontend-app ../frontend
docker build -t backend-app ../backend
