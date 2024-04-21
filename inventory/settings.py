from dotenv import find_dotenv, load_dotenv
from pydantic_settings import BaseSettings, SettingsConfigDict

load_dotenv(find_dotenv(".env"))


class Settings(BaseSettings):
    REDIS_HOST: str = "test"
    REDIS_PORT: int = "111"
    REDIS_PASSWORD: str = "test"

    model_config = SettingsConfigDict(
        env_file=".env",
    )


settings = Settings()
