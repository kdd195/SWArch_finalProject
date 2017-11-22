# SWArch_finalProject

### Documentation
https://app.swaggerhub.com/apis/HilbunHotels/hhotel/1.0.6/

### Docker
#### to build docker image
$ docker build -t hhapi .
#### to list docker images
$ docker images
#### to run the docker image
$ docker run -p 49150:8081 hhapi
(this will automatically start the node server)
#### to see running docker containers
$ docker ps
####  to open a shell in container
$ docker exec -it "container id from docker ps" /bin/sh
