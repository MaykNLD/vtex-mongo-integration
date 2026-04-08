# VTEX Mongo Integration API

> **Enterprise-grade API Gateway** que conecta la plataforma de e-commerce **VTEX** con una base de datos **MongoDB**, exponiendo además un CRUD completo de Workouts como demostración de arquitectura RESTful escalable.

---

## Stack Técnico

| Tecnología | Uso |
|---|---|
| Node.js 18 | Runtime |
| Express.js 4.x | Framework HTTP |
| MongoDB + Mongoose | Base de datos NoSQL |
| Axios | Conector HTTP para VTEX |
| dotenv | Gestión segura de variables de entorno |
| Docker + Docker Compose | Contenedorización completa |

---

## Arquitectura

```
src/
├── config/
│   └── db.js              # Configuración Mongoose
├── controllers/
│   ├── userController.js  # CRUD de usuarios
│   ├── workoutController.js # CRUD de workouts
│   └── vtexController.js  # Conector VTEX Orders API
├── models/
│   ├── User.js            # Schema de usuarios
│   └── Workout.js         # Schema de entrenamientos
├── routes/
│   └── api.js             # Router versionado /api/v1
├── services/
│   ├── userService.js     # Lógica de negocio usuarios
│   └── workoutService.js  # Lógica de negocio + seed inicial
└── server.js              # Bootstrap: DB > Seed > Server
```

---

## Endpoints

### Workouts (CRUD Completo)
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/v1/workouts` | Listar todos |
| GET | `/api/v1/workouts/:id` | Obtener uno |
| POST | `/api/v1/workouts` | Crear nuevo |
| PUT | `/api/v1/workouts/:id` | Actualizar |
| DELETE | `/api/v1/workouts/:id` | Eliminar |

### Users
| Método | Ruta | Descripción |
|---|---|---|
| POST | `/api/v1/users` | Crear usuario(s) |
| PUT | `/api/v1/users/:id` | Actualizar usuario |

### VTEX Connector
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/v1/pedido/:id` | Obtener pedido de VTEX |

### Health
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/health` | Estado del servidor |

---

## Instalación Local

## Instalación Local Nativa (Sin Docker)

Si deseas probar el código en crudo sin contenedores:

1. **Configurar MongoDB**: Necesitas instalar MongoDB localmente en tu sistema o disponer de un Clúster en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) de manera gratuita.
2. **Clonar y Preparar el entorno**:
   ```bash
   git clone https://github.com/MaykNLD/vtex-mongo-integration.git
   cd vtex-mongo-integration
   
   npm install
   ```
3. **Variables Críticas**: Copia el template hacia tu propio archivo `.env`:
   ```bash
   cp .env.example .env
   ```
   Abre el archivo `.env` resultante y configura el acceso a Mongo para que no use la red de Docker:
   ```env
   # EJEMPLO MONGODB LOCAL
   MONGO_URI=mongodb://127.0.0.1:27017/modulopracticas
   
   # O EJEMPLO MONGODB ATLAS (NUBE)
   MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/modulopracticas
   ```

4. **Arrancar el Backend**:
   ```bash
   npm run dev
   ```

## Instalación con Docker (Recomendado)

```bash
# Levanta la API + MongoDB en segundos
docker-compose up --build
```

---

## Variables de Entorno (.env)

```env
PORT=3000
MONGO_URI=mongodb://mongo:27017/modulopracticas
VTEX_APP_KEY=tu_vtex_app_key
VTEX_APP_TOKEN=tu_vtex_app_token
VTEX_ACCOUNT_NAME=tu_account_vtex
```

> ⚠️ Nunca subas el archivo `.env` con credenciales reales a GitHub. Usa `.env.example` como template público.
