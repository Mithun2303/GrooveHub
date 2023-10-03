from pydantic import BaseModel
from typing import Optional

class UserAuth(BaseModel):
    username:Optional[str]
    email:Optional[str]
    mobileNo:Optional[str]
    password:str
    profilepic:Optional[str]
    
    