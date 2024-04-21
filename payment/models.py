from pydantic import BaseModel
from redis_om import HashModel

from payment.redis_conn import redis


class Order(HashModel):
    product_id: str
    price: float
    fee: float
    total: float
    quantity: int
    status: str

    class Meta:
        database = redis


class OrderCreate(BaseModel):
    product_id: str
    quantity: int
