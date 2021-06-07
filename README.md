# DOCKER

## What happens in Docker

When run a command in the docker CLI: docker run -it redis:
The command goes to the docker hub and pull down an iamge.

## What is an image in docker?

An image is a single file with all the dependencies and configuration required to run a program. Its just like the OS.
e.g a redis image.

## What is the docker image used for?

After the image is pulled from the hub, it is then used to create a container.

## What is a container in docker?

It is an instance of of an image, more like a running program.
It is a program with its own isolated set of hardware resources.
It has its own little space of memory, networking technology and its own little space of hard drive.

## Important command to issue for a start

`docker run hello-world` - Make sure to type correctly what you see. This command means you should create/start a new container using `hello-world` as image.

Hello from Docker!  
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:

> 1.  The Docker client contacted the Docker daemon.
> 2.  The Docker daemon pulled the "hello-world" image from the Docker Hub.

    (amd64)

> 3.  The Docker daemon created a new container from that image which runs the

    executable that produces the output you are currently reading.

> 4. The Docker daemon streamed that output to the Docker client, which sent it

    to your terminal.
