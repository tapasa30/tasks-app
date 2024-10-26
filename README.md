# Tasks APP

## Requisitos

Asegúrate de tener instalados los siguientes componentes:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Configuración del proyecto

1. Clona el repositorio

## Pasos para iniciar el proyecto

Ejecuta los siguientes comandos en el siguiente orden:

```bash
make build               # Construye la imagen Docker y prepara el entorno
make up                  # Inicia el contenedor
```

Iniciar la app en local:

```bash
make serve_app
```

Para detener el contenedor:
  ```bash
  make down
  ```

## Acceder a la APP

Una vez que los contenedores estén en funcionamiento, podrás acceder a la APP desde este host: [http://localhost:4242](http://localhost:4242).

Si importas la base de datos de prueba en la API, el usuario que hay creado es:

email: ``user@tasks.com``

password: ``task``

