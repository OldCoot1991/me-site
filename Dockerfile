FROM node:24.16.0-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Копируем содержимое standalone-артефакта напрямую
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
