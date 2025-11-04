# 🗒️ Backend Lista de Tareas

Este proyecto es un **backend en Node.js con Express y MongoDB** que gestiona una lista de tareas.  
Está desplegado en **Vercel**, y permite listar, crear, editar y eliminar tareas desde endpoints REST.

---

## 🚀 Demo en línea

🔗 **Backend desplegado:**  
👉 [https://backend-lista-tareas-amber.vercel.app/](https://backend-lista-tareas-amber.vercel.app/)

- Al entrar a `/` se muestra una página HTML informativa.  
- Las rutas de la API comienzan con `/api`.  
  Ejemplo:  
  ```
  https://backend-lista-tareas-amber.vercel.app/api/tareas
  ```

---

## ⚙️ Variables de entorno

Para ejecutar el proyecto en tu entorno local, creá un archivo **`.env`** en la raíz con los siguientes valores:

```env
PORT=3000
MONGODB=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/<nombre_base>
```

- `PORT`: Puerto donde se ejecutará el servidor local.  
- `MONGODB`: Conexión a tu base de datos MongoDB Atlas.

> ⚠️ En Vercel, configurá estas variables desde **Project Settings → Environment Variables**.

---

## 🧩 Estructura del proyecto

```
/index.js
/vercel.json
/public/index.html
/src/
 ├── server/config.js
 ├── routes/
 │    ├── index.routes.js
 │    ├── tareas.routes.js
 └── controllers/
      └── tareas.controllers.js
```

---

## 🖥️ Ejecución local

```bash
npm install
npm run dev
```

Luego abrí [http://localhost:3001/api/tareas](http://localhost:3001/api/tareas)
