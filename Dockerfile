# Multi-stage build: build Vite (React) app, then serve with Nginx

FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies only for the frontend app
COPY frontend/package.json frontend/package-lock.json ./frontend/
RUN cd ./frontend \
  && npm ci --no-audit --no-fund

# Copy the rest of the frontend sources and build
COPY frontend ./frontend
RUN cd ./frontend \
  && npm run build

FROM nginx:1.25-alpine AS runner

# Nginx configuration for SPA/SSG routing and asset caching
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static build output from Vite
COPY --from=builder /app/frontend/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


