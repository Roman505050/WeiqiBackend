import json

from presentation.rest.main import custom_openapi

openapi = custom_openapi()

with open("./docs/docs/openapi.json", "w") as f:
    f.write(json.dumps(openapi, indent=4))
