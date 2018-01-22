# bulk load data
mongoimport --db=heroku_zcdsc1v8 --collection=products --type=csv --headerline --file=data/products.csv --drop
