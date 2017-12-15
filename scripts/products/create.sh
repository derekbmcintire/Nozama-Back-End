#!/bin/bash

API="http://localhost:4741"
URL_PATH="/products"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=OQeyH2/2RoZ47CL+/pxlMGe4lCnd1EWIUceBqf9/aMk=--S73+9uxrJwgwFTvUiUKhMtbCCuBTWQVP7wJxr/L9AkQ=" \
  --data '{
    "product": {
      "name": "'"${NAME}"'",
      "description": "'"${DESCRIPTION}"'",
      "url": "'"${URL}"'",
      "stock": "'"${STOCK}"'",
      "price": "'"${PRICE}"'"
    }
  }'

echo
