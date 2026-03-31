from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from database import async_engine, get_db, Base
from models import ContactRequest
from schemas import ContactRequestCreate, ContactRequestOut


@asynccontextmanager
async def lifespan(app: FastAPI):
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield


app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
async def health():
    return {"status": "ok"}


@app.post("/api/contact", response_model=ContactRequestOut, status_code=201)
async def create_contact(payload: ContactRequestCreate, db: AsyncSession = Depends(get_db)):
    request = ContactRequest(
        name=payload.name,
        contact=payload.contact,
        message=payload.message,
    )
    db.add(request)
    await db.commit()
    await db.refresh(request)
    return request


@app.get("/api/contacts", response_model=list[ContactRequestOut])
async def list_contacts(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(ContactRequest).order_by(ContactRequest.created_at.desc()))
    return result.scalars().all()
