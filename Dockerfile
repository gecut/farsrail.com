# syntax=docker/dockerfile:1
FROM node:22-alpine AS deps

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable && corepack prepare pnpm@10.26.0 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM node:22-alpine AS builder

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable && corepack prepare pnpm@10.26.0 --activate

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm generate:world-map && \
    pnpm build

# Precompress compressible static assets for zero-CPU NGINX gzip_static serving
RUN find /app/out -type f \( \
      -name "*.html" -o \
      -name "*.js" -o \
      -name "*.css" -o \
      -name "*.svg" -o \
      -name "*.json" -o \
      -name "*.webmanifest" -o \
      -name "*.txt" -o \
      -name "*.xml" \
    \) -exec gzip -k -9 {} +

FROM ghcr.io/gecut/nginx/cdn:2.0.0 AS runtime

LABEL org.opencontainers.image.title="farsrail.com" \
      org.opencontainers.image.description="Static Khalij Fars Rail online catalog served by gecut/nginx/cdn." \
      org.opencontainers.image.vendor="Khalij Fars Rail" \
      org.opencontainers.image.source="https://github.com/gecut/containers/tree/main/nginx/cdn"

# Cloudflare edge integration: Real-IP restoration from Cloudflare proxy ranges
ENV NGINX_REAL_IP_HEADER="CF-Connecting-IP" \
    NGINX_TRUSTED_PROXY_CIDRS="173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22,2400:cb00::/32,2606:4700::/32,2803:f800::/32,2405:b500::/32,2405:8100::/32,2a06:98c0::/29,2c0f:f248::/32"

COPY docker/nginx/templates/ /etc/nginx/templates/
COPY --from=builder --chown=nginx:nginx /app/out/ /data/
