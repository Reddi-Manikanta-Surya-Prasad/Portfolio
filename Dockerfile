# Use the official Node.js image as a base image
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Use nginx image as the production server
FROM nginx:alpine

# Copy build files from the previous stage to the nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run nginx server
CMD ["nginx", "-g", "daemon off;"]
