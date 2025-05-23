# Imagen base
FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos necesarios para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto
EXPOSE 8000

# Comando de inicio
CMD ["npm", "start"]
# Imagen base oficial de Node.js
FROM node:18-alpine

# Crear carpeta de trabajo
WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./
RUN npm install

COPY . .

# Exponer el puerto
EXPOSE 8000

# Comando de inicio
CMD ["node", "server.js"]

