# Stage 1: Build the React application
# Use a Node.js runtime as the base image for building
FROM node:20-alpine as builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
# This step ensures that npm install is only re-run if dependencies change
COPY package*.json ./

# Install all dependencies, including devDependencies, which are needed for the build process
RUN npm install

# Copy the rest of the application's source code into the working directory
COPY . .

# Build the React application for production
# This command runs the 'build' script defined in your package.json,
# which typically uses Vite to compile your application into static assets
RUN npm run build

# Stage 2: Serve the application with Nginx
# Use a lightweight Nginx image to serve the static files
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy a custom Nginx configuration file into the container
# You will need to create an 'nginx.conf' file in the same directory as your Dockerfile.
# This configuration will tell Nginx how to serve your React application.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static assets from the 'builder' stage to Nginx's public directory
# The 'dist' directory is where Vite typically outputs the production build
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80, which is the default HTTP port Nginx listens on
EXPOSE 80

# Define the command to run Nginx when the container starts
# 'daemon off;' ensures Nginx runs in the foreground, which is necessary for Docker containers
CMD ["nginx", "-g", "daemon off;"]

