from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from redis_om import NotFoundError

from inventory.models import Product, ProductCreate

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


@app.get("/products/")
async def all_products():
    return [format_product(pk) for pk in Product.all_pks()]


def format_product(pk: str):
    product = Product.get(pk)
    return {
        "id": product.pk,
        "name": product.name,
        "price": product.price,
        "quantity_available": product.quantity_available,
    }


@app.get("/products/{product_id}")
async def get_product(product_id: str):
    try:
        product = Product.get(product_id)
    except NotFoundError:
        raise HTTPException(status_code=404, detail="Product not found")

    return product


@app.post("/products/")
async def get_one_product(product: ProductCreate):
    new_product = Product(**product.model_dump())
    return new_product.save()


@app.delete("/products/{product_id}")
async def delete_product(product_id: str):
    try:
        Product.delete(product_id)
    except NotFoundError:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"status": "success"}
