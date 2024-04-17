from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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
    return Product.all_pks()


@app.post("/products/")
async def add_product(product: ProductCreate):
    new_product = Product(**product.model_dump())
    return new_product.save()
