# Imagen base oficial de Node.js
FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias e instalarlas
COPY package*.json ./
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto usado por la app
EXPOSE 8000

# Comando para iniciar la aplicación
CMD ["node", "server.js"]
