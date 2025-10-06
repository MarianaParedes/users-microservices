
### Descripcion

Proyecto basado en el documento de prueba tecnica para Autocity

### Tecnologías usadas

 Nest   [documentation](https://docs.nestjs.com/). 
 Prisma
 Mysql
 Docker

### Configuración base del Proyecto | Project setup

Dirigirse a  ruta de la carpeta, en donde se tiene alojado el proyecto. Ejemplo:

```bash
    $ cd C:\Users\Mariana\NEST\autocity
```

Ejecutamos el siguiente comando para instalar dependencias

```bash
    $ pnpm install
```

## Variables de entorno | 
Crear una copia del archivo .env.template, renombrarlo a .env y configurar las variables de entorno

```bash
    PORT=3001
.....
```

### Base de Datos Dockerizada
Ejecutar el siguiente comando para crear y ejecutar la base de datos en base a la imagen mysql:8.0.43-debian

```bash
    docker run -p3306:3306 --name autoci -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=datab mysql:8.0.43-debian
```
## Ejecutamos el proyecto | Compile and run the project

```bash
    $ pnpm run start:dev
```


### ORM Prisma - Migracion de Base de datos

```bash
 npx prisma migrate dev --name init
```


<!-- Lo que hice io para preparar el proyecto en nest

ver de instalar bien pnpm

Usamos 

pnpm install @nestjs/cli  [1- usamos pnpm   2- No lo instalamos globalmente]  dolor de h

nest --help no funciona  -->
