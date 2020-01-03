# Build Phase
FROM node:alpine as builder
WORKDIR /app

# Copy dependencies to the container i.e '/app'
COPY package.json .

RUN npm install

# Copy source code to the container - /app
COPY . .

# The build folder will be created in the /app/build
RUN npm run build 

# ================PROCESS================
# Just build the source code for production, then copy the build folder to nginx and it does the rest
# ===========================================


# Run Phase
FROM nginx

# Copy build folder from build phase to nginx container
COPY --from=builder /app/build /usr/share/nginx/html