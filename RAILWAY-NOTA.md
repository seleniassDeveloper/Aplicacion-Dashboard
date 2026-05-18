# Railway: qué desplegar

Este repo (**Aplicacion-Dashboard**) es el **sitio web + landing** (Vite).  
El **API Express + PostgreSQL** está en **`seleniassDeveloper/Dashboardapp`**.

## Para el backend (API)

En Railway usá el repo **Dashboardapp**:

- Root: raíz del repo o `backend`
- Builder: **Dockerfile** (no Railpack)
- Variables: `DATABASE_URL`, `FRONTEND_URL`, `FIREBASE_SERVICE_ACCOUNT_JSON`

## Para este repo (opcional)

Solo si querés hostear la landing en Railway:

- Builder: Railpack / Nixpacks o `npm run build`
- Variables `VITE_*` y `VITE_API_URL` apuntando al API de Railway

El alias `@appdash` apunta a `src/appdash/` (código del dashboard incluido en el repo).
