
# Usa la imagen oficial de Node
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración del proyecto
COPY package.json package-lock.json* ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto 8080
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "8080"]
