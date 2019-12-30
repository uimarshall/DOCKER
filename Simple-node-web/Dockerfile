# Specify base image
# NB: alpine does not come bundled/preinstalled with npm
FROM node:alpine

# Copy any file to this directory
WORKDIR /usr/app

# Copy files from package.json 1st frm current working directly to d current workdir of container
COPY ./package.json ./


# Install/add more programs/dependencies to alpine FS Snapshot

RUN npm install

# Copy all files after installation

COPY ./ ./

# Default program on startup

CMD ["npm","start"]