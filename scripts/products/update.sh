#!/bin/bash

API="http://localhost:4741"
URL_PATH="/products/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "product": {
      "name": "'"${NAME}"'",
      "description": "'"${DESCRIPTION}"'",
      "url": "'"${URL}"'",
      "quantity": "'"${QUANTITY}"'"
    }
  }'

echo
