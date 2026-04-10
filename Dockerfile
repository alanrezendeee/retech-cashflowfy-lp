# =============================================
# Stage 1: Build
# =============================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copia dependências primeiro (cache layer)
COPY package.json package-lock.json ./
RUN npm ci

# Copia o restante e builda
COPY . .
RUN npm run build

# =============================================
# Stage 2: Serve com Nginx (leve e rápido)
# =============================================
FROM nginx:alpine AS runner

# Remove config padrão do nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia config customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos estáticos do build
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
