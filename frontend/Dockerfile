# Use the official Nginx image as a base
FROM nginx:alpine

# Copy the built React app to the Nginx web root directory
COPY build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
