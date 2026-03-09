# --- ЭТАП 1: Установка зависимостей ---
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Копируем файлы манифеста
COPY package.json package-lock.json* ./
# Устанавливаем зависимости (используем frozen-lockfile для стабильности)
RUN npm ci

# --- ЭТАП 2: Сборка приложения ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Отключаем телеметрию Next.js во время сборки
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# --- ЭТАП 3: Финальный образ (Runner) ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Создаем системного пользователя для безопасности
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем только необходимые файлы из этапа сборки
COPY --from=builder /app/public ./public

# Устанавливаем правильные права для кэша
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Используем output: 'standalone' для уменьшения веса образа
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Запускаем сервер, который генерирует Next.js в режиме standalone
CMD ["node", "server.js"]