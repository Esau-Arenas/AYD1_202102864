# Etapa 1: Build de la app
FROM node:18-alpine AS build

# Crea directorio de trabajo
WORKDIR /app

# Copia los archivos y paquetes
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Construye la app (genera la carpeta dist)
RUN npm run build

# Etapa 2: Servirlo con Nginx
FROM nginx:alpine

# Copia el build a la carpeta pública de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia una configuración básica de Nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto 80
EXPOSE 80

# Inicia Nginx en modo foreground
CMD ["nginx", "-g", "daemon off;"]
