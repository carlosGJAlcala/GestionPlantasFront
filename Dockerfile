# Usar una imagen base de Node.js para construir la aplicación
FROM node:18 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY . .

# Instalar dependencias
RUN npm install

# Construir la aplicación
RUN npm run build
#Arrancamos la aplicacion
CMD ["npm", "start"]