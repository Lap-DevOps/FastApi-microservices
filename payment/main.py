from fastapi import FastAPI, HTTPException
from fastapi.background import BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware

from payment.models import Order, OrderCreate
from payment.product_client import product_client
from payment.redis_conn import redis

app = FastAPI()

origins = [
    "*",
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:7071",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS", "DELETE", "PATCH", "PUT"],
    allow_headers=[
        "Content-Type",
        "Set-Cookie",
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Origin",
        "Authorization",
        "*",
    ],
)


@app.post("/orders")
async def create_order(order: OrderCreate, background_tasks: BackgroundTasks):
    product = await product_client.get_product(order.product_id)
    if "Product not found" in product.values():
        raise HTTPException(status_code=404, detail="Product not found")
    order = Order(
        product_id=order.product_id,
        price=product["price"],
        fee=0.2 * product["price"],
        total=1.2 * product["price"],
        quantity=order.quantity,
        status="pending",
    )
    order.save()

    background_tasks.add_task(order_status_completed, order)

    return order.save()


@app.get("/orders")
async def get_all_orders():
    return [format_orders(pk) for pk in Order.all_pks()]


def format_orders(pk: str):
    order = Order.get(pk)
    return {
        "id": order.pk,
        "product_id": order.product_id,
        "price": order.price,
        "fee": order.fee,
        "total": order.total,
        "quantity": order.quantity,
        "status": order.status,
    }


def order_status_completed(order: Order):
    order.status = "completed"
    order.save()
    redis.xadd("order_completed", order.dict(), "*")
