#!/bin/bash

API="https://dry-journey-16743.herokuapp.com"
URL_PATH="/products"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=mYwjyrq8cfm9/5B8i14XifXNb3iUnnKamhppYoppXEM=--MZdm+EZeS5+Vj61vUeeshziSkE6hy+UjUfJJJwaL4vw=" \
  --data '{
    "product": {
      "name": "Boston MA Map Print Navy Blue",
      "description": "Map Art Print. Frame and Mat NOT Included.",
      "url": "https://images-na.ssl-images-amazon.com/images/I/A1qUi1fZvYL._SL1500_.jpg",
      "stock": "33",
      "price": "19"
    }
  }'

echo
