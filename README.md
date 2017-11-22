# SWArch_finalProject

###Documentation
https://app.swaggerhub.com/apis/HilbunHotels/hhotel/1.0.6/

###Docker
#####build docker image
docker build -t hhapi .
#####list docker images
docker images
#####run docker image
docker run -p 49150:8081 hhapi
(this will automatically start the node server)
#####see running docker containers
docker ps
#####open shell in container to run server
docker exec -it <container id from docker ps> /bin/sh

###Google Cloud Platform
???????
