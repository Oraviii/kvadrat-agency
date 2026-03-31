# Агентство Квадрат — Landing

## Запуск в разработке

### 1. Поднять PostgreSQL и Caddy

```bash
cp .env.example backend/.env
docker compose up -d
```

### 2. Запустить бэкенд (на хосте, с hot-reload)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 3. Запустить фронтенд (на хосте, с HMR)

```bash
cd frontend
npm install
npm run dev
```

Открыть в браузере:
- http://localhost       — через Caddy (продакшн-like)
- http://localhost:5173  — Vite напрямую (быстрее для разработки)

## Структура проекта

```
kvadrat-agency/
├── docker-compose.yml      # PostgreSQL + Caddy
├── Caddyfile               # Reverse proxy: /api/* → :8000, /* → :5173
├── .env.example
├── backend/
│   ├── main.py             # FastAPI app, routes
│   ├── models.py           # SQLAlchemy ORM
│   ├── database.py         # Async engine + session
│   ├── schemas.py          # Pydantic v2 schemas
│   └── requirements.txt
└── frontend/
    ├── src/
    │   └── components/     # Header, Hero, Services, Cases, About, Contact, Footer
    └── ...
```

## API

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/health | Health check |
| POST | /api/contact | Submit contact form |
| GET | /api/contacts | List all submissions (admin) |
