FROM tomcat:9.0

WORKDIR /app

RUN apt-get --assume-yes update

RUN apt-get --assume-yes install dos2unix

COPY . .

RUN cp -rf ./tomcat/web.xml /usr/local/tomcat/conf/web.xml

RUN dos2unix ./gradlew

RUN chmod +x ./gradlew bootWar

RUN ./gradlew bootWar

RUN find ./build/libs/ -name '*.war' -exec cp "{}" "/tmp/api.war"  \;

FROM tomcat:9.0

COPY --from=0 /tmp/api.war /usr/local/tomcat/webapps/api.war

#CMD sleep 10s && catalina.sh run
