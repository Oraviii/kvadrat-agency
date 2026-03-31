from datetime import datetime
from pydantic import BaseModel


class ContactRequestCreate(BaseModel):
    name: str
    contact: str
    message: str | None = None


class ContactRequestOut(BaseModel):
    id: int
    name: str
    contact: str
    message: str | None
    created_at: datetime

    model_config = {"from_attributes": True}
