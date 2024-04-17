from pydantic import BaseModel
from redis_om import HashModel

from inventory.redis import redis


class Product(HashModel):
    name: str
    price: float
    quantity_available: int

    class Meta:
        database = redis


class ProductCreate(BaseModel):
    name: str
    price: float
    quantity_available: int
