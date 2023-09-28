# Next.js Retro game
Para correr localmente, se necesita la base de datos
Antes de empezar, asegúrate de tener instalado Docker Desktop y MongoDB Compass.
```
docker-compose up -d
```

* El -d, significa __detached__



## Configurar MongoDB

* MongoDB URL para conectar usando MongoDB Compass:
```
mongodb://localhost:27017
```

* Reconstruir los modulos de node  y levantar Next
```
npm install
npm run dev
```

## Llenar la base de datos con información de pruebas

Llamara:
```
http://localhost:3000/api/seed
```



## Llenar la base de datos con información de pruebas

Llamara:
```
http://localhost:3000/api/seed
```