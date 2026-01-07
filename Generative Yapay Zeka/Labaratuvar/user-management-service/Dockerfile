FROM node:20-alpine AS base
WORKDIR /app

ENV NODE_ENV=production

FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

FROM base AS build
COPY package.json package-lock.json* ./
RUN npm ci
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

FROM base AS runner
RUN addgroup -S app && adduser -S app -G app
USER app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json ./

EXPOSE 3001
CMD ["node", "dist/server.js"]


