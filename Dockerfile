# =============================================
# Stage 1: Build
# =============================================
FROM node:22-alpine AS builder

WORKDIR /app

# Recebe variáveis de build do Railway (obrigatória: WHATSAPP_NUMBER)
# Railway injeta automaticamente as env vars do projeto como build args
ARG WHATSAPP_NUMBER
ENV WHATSAPP_NUMBER=$WHATSAPP_NUMBER

# Copia dependências + .npmrc primeiro (cache layer)
# .npmrc precisa estar presente ANTES do npm ci para legacy-peer-deps funcionar
COPY package.json package-lock.json .npmrc ./
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
