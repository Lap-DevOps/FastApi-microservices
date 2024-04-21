from typing import Any, Dict

from aiohttp import ClientSession


class HTTPClient:
    """
    Initialize the class with the base URL and API key.

    Parameters:
        base_url (str): The base URL for the session.
        api_key (str): The API key for authentication.

    Returns:
        None
    """

    def __init__(self, base_url: str) -> None:
        self._session = ClientSession(base_url=base_url, headers={"Accepts": "application/json"})


class ProductHttpClient(HTTPClient):

    async def get_product(self, product_id: str) -> Dict[str, Any]:
        """
        Asynchronously retrieves a list of the latest cryptocurrency listings.
        """
        async with self._session.get(f"/products/{product_id}") as resp:
            result = await resp.json()
            return result
