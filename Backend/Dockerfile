# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Install netcat for waiting on DB
RUN apk add --no-cache netcat-openbsd

# Set working directory
WORKDIR /usr/src/app

# Copy dependency files
COPY package*.json ./

# Install dependencies (only production ones)
RUN npm install --omit=dev

# Copy the rest of the app
COPY . .

# Copy entrypoint script
COPY entrypoint.sh .

# Make entrypoint executable
RUN chmod +x entrypoint.sh

# Expose backend port (adjust if different)
EXPOSE 3000

# Set environment variable to choose command (seed or start)
ENV CMD_OPTION=start

# Use custom entrypoint
CMD ["./entrypoint.sh"]
