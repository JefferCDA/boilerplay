# fifa-players
Technical test

# Mysql config
Cambiar los valores de conexión para la base de datos con mysql en la ruta config/config.js

# How to build?
Para crear los archivos de configuración de  sequelize, migraciones (crear base de datos y tablas) e inicializar las tablas con datos:
`npm run build`
este comando creará la base de datos y sus respectivas tablas, hará la consulta a la api de EASports, y guardará en la tabla players los datos de cada jugador.

# Endpoint
Para filtrar a los jugadores pertenecientes a un equipo (búsqueda por nombre del equipo)
`POST / http://localhost:8080/api/v1/team`
body: {
    "team": "team name",
    "page": 1 //opcional, por defecto 1
}

Para obtener el listado de jugadores (filtro por los parámetros dados)
`GET / http://localhost:8080/api/v1/players`
query: {
    "name": "player name",
    "page": 1, //opcional, por defecto 1
    "order": "desc", // por defecto 'asc'
}
