import time

from payment.models import Order
from payment.redis_conn import redis

key = "refund_order"

group = "payment-group"

try:
    redis.xgroup_create(key, group)
except Exception:
    print("Group already exists")  # ignore if group already exists

if __name__ == "__main__":

    while True:
        try:
            results = redis.xreadgroup(group, key, {key: ">"}, None)

            if results:
                for result in results:
                    obj = result[1][0][1]
                    order = Order.get(obj["pk"])
                    order.status = "refunded"
                    order.save()

        except Exception as e:
            print(e)

        time.sleep(1)
