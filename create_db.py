from db import Base,engine
from schemas import spaceSchema
print("Creating database ....")

Base.metadata.create_all(engine)
