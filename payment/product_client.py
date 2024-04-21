from payment.http_client import ProductHttpClient
from payment.settings import settings

product_client = ProductHttpClient(
    base_url=settings.PRODUCT_BASE_URL,
)
