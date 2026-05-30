# ==========================================
# STAGE 1: Build the React Application
# ==========================================
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies first (for caching)
COPY package*.json ./
RUN npm install

# Copy the rest of the code and build
COPY . .
RUN npm run build 
# Note: If you use Create React App instead of Vite, change 'build' to whatever your build script is.

# ==========================================
# STAGE 2: Serve with Nginx
# ==========================================
FROM nginx:alpine

# Copy the built static files from Stage 1 into Nginx
# (Change /app/dist to /app/build if using Create React App instead of Vite)
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx naturally runs on port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]