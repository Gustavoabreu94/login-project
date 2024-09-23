FROM node:20-alpine as builder
WORKDIR /app
RUN apk add --no-cache net-tools
RUN ping -h
COPY package*.json ./
RUN npm install

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]