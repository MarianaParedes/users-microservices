###Notas para mi yo del futuro

nest new [ALGO] crea un nuevo proyecto
nest g res users genera un recurso  -> transport layer used REST API -> generamos sus CRUD entry points
Definit PATCH 

Variables de entorno: .env files
 Crear en el root del proyecto el archivo .env en la carpeta src la carpeta config ( la ruta quedaria como src/config

Usamos nestjs/config  (reemplaza a dotenv y joi (es el validador de esquema)
nestjs/config Configuration module for Nest based on the dotenv (to load process environment variables) package.
 pnpm i @nestjs/config

//Alternativa para manejar variables de entorno
 constructor(
private readonly configService:ConfigService
){}

Libreria util:
pnpm i class-validator class-transformer

-------------------
SHOW eXTENSIONS
* easy snippet 

Cuando subí el repositorio
git remote add origin https://github.com/MarianaParedes/paredes-mariana-autocity.git
git branch -M master
git push -u origin master

###Docker
solo mysql en docker
docker run -p3306:3306 --name autosi -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=datab mysql:8.0.43-debian

### ORM Prisma

 npx prisma migrate dev --name init
