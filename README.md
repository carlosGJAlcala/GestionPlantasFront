
# GestionPlantasFront

**Descripción:**
GestionPlantasFront es la interfaz de usuario para el sistema de gestión de huertos automatizados. Esta aplicación frontend, desarrollada con React, permite a los usuarios interactuar de manera intuitiva con las funcionalidades del backend, facilitando la monitorización y control de los huertos.

## Características

- **Visualización de Datos en Tiempo Real:** Muestra información actualizada sobre las condiciones del huerto, como humedad, temperatura y otros parámetros ambientales.
- **Control de Dispositivos:** Interfaz para gestionar sistemas de riego, iluminación y otros dispositivos automatizados.
- **Gestión de Usuarios:** Permite a los administradores crear y modificar perfiles de usuarios con distintos niveles de acceso.
- **Notificaciones y Alertas:** Sistema de alertas para informar a los usuarios sobre eventos importantes o condiciones anómalas.

## Tecnologías Utilizadas

- **Lenguaje de Programación:** JavaScript
- **Framework:** React
- **Gestor de Paquetes:** npm
- **Contenerización:** Docker

## Requisitos Previos

- **Node.js** y **npm** instalados en el sistema.
- **Docker** (opcional, para despliegue en contenedores).

## Instalación y Ejecución

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/carlosGJAlcala/GestionPlantasFront.git
   cd GestionPlantasFront
   ```

2. **Instalar las dependencias:**

   ```bash
   npm install
   ```

3. **Iniciar la aplicación en modo desarrollo:**

   ```bash
   npm start
   ```

   La aplicación se ejecutará en `http://localhost:3000`.

## Despliegue con Docker

Para desplegar la aplicación utilizando Docker:

1. **Construir la imagen de Docker:**

   ```bash
   docker build -t gestionplantas-front .
   ```

2. **Ejecutar el contenedor:**

   ```bash
   docker run -p 3000:3000 gestionplantas-front
   ```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm start`: Ejecuta la aplicación en modo desarrollo.
- `npm test`: Inicia el corredor de pruebas en modo interactivo.
- `npm run build`: Construye la aplicación para producción en la carpeta `build`.
- `npm run eject`: Extrae la configuración de Create React App para personalizaciones avanzadas.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar:

1. Realiza un fork del repositorio.
2. Crea una nueva rama para tus cambios.
3. Envía un pull request detallando las modificaciones propuestas.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Para más detalles, consulta el archivo `LICENSE` en el repositorio.

