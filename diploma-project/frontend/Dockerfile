FROM node:16.10

ENV APP_SERVER_PORT=30003

WORKDIR /app
COPY . .

RUN apt-get update
RUN apt-get install gettext-base

RUN envsubst < ./src/environments/base.environment.ts > /tmp/with_envs.ts
RUN mv /tmp/with_envs.ts ./src/environments/base.environment.ts

RUN rmdir ./node_modules || echo "Skipping - Dir not exist"
RUN npm i

CMD [ "npm", "start" ]
