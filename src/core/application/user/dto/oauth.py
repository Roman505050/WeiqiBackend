from typing import Optional

from pydantic import BaseModel, EmailStr, HttpUrl


class OauthUserDTO(BaseModel):
    oauth_provider: str
    oauth_id: str
    email: Optional[EmailStr] = None
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    profile_picture: Optional[HttpUrl] = None
    locale: Optional[str] = None  # "en-US", "uk-UA"
    access_token: Optional[str] = None
    refresh_token: Optional[str] = None
