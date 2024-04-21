import time

from redis.exceptions import RedisError

from inventory.models import Product
from inventory.redis_conn import redis

key = "order_completed"

group = "inventory-group"

try:
    redis.xgroup_create(key, group)
except RedisError as e:
    print(f"Error: {e}")  # ignore if group already exists

if __name__ == "__main__":

    while True:
        try:
            results = redis.xreadgroup(group, key, {key: ">"}, None)

            if results:
                for result in results:
                    obj = result[1][0][1]
                    product = Product.get(obj["product_id"])
                    if product:
                        product.quantity_available -= int(obj["quantity"])
                        product.save()
                    else:
                        redis.xadd("refund_order", obj, "*")
        except Exception as e:
            print(e)

        time.sleep(1)
