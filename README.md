# Diferencias Genéticas

_El proyecto recibe secuencias de ADN procesandolas para saber si esiste o no una mutación._

Los endpoints son :

https://diferencias-geneticas.vercel.app/api/stats. <-GET / Para conocer las estadisticas historicas de las pruebas

https://diferencias-geneticas.vercel.app/api/mutation <- POST / para procesar el arreglo de datos

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

_-Node JS_

```
node -v
```

### Instalación 🔧

_Los pasas para instalar son:_

_Clona el repositorio_

```
git clone https://gitlab.com/juanpablosolana/diferencias-geneticas.git
```

Entra a carpeta

```
cd diferencias-geneticas
```

Instala las dependencias

```
npm i
```

Corre el entorno de desarrollo

```
npm run dev
```

---

El proyecto ***necesita una cadena de conexión con Mongo Atlas DB*** y el id de un documento en una variable de entorno por lo que se debe crear un archivo .env.local en la carpeta raiz con la siguiente estructura

DB = <- Cadena de conexión Mongo Atlas DB ->

id= <- id del documento a procesar ->

---

## Ejecutando las pruebas ⚙️

Para correr los test de pruebas con Jest solo tienes que ejecutar el entorno dev

```
npm run test
```

Los scripts de pruebas se encuentran en la carpeta test / api

### Despliegue 📦

_Al ser un proyecto con NextJS utilicé Vercel para hacer el despligue y se ecuentra vinculado a la rama main del repostorio_

## Construido con 🛠️

_Las herramientas en este proyecto son:_

* NextJS - Para los endpoints / frontend
* Mongo - Con su servicio cloud Atlas para la base de datos
* Jest -  Verifica los test

---

⌨️ con ❤️ por Pablo Solana 😊
