#!/bin/bash

# Define variables
IMAGE_NAME="tilzam/detox:latest"
CONTAINER_NAME="detox_container"
PORT_MAPPING="3000:3000"

# Pull the latest image
docker pull $IMAGE_NAME

# Stop and remove existing container
docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME

# Run the container with the specified environment file
docker run -d \
  --name $CONTAINER_NAME \
  -p $PORT_MAPPING \
  --env-file .env \
  $IMAGE_NAME