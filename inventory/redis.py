from redis_om import get_redis_connection

from inventory.settings import settings

redis = get_redis_connection(
    host=settings.REDIS_HOST, port=settings.REDIS_PORT, password=settings.REDIS_PASSWORD, decode_responses=True
)
