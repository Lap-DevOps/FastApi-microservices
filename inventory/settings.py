from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    REDIS_HOST: str = "test"
    REDIS_PORT: int = "111"
    REDIS_PASSWORD: str = "test"

    model_config = SettingsConfigDict(
        env_file=".env",
    )


settings = Settings()
