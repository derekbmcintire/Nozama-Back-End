# Nozamaps
### Express E-Commerce Team Project / Back-End

## About

Nozamaps was built by Peter Samson, Brian Cameron, and myself for the team project during my course at General Assembly. We were given the E-commerce prompt, and were required to incorporate the Stripe Checkout API into our application. We were also required to use a Node/Express.js backend and a MongoDB non-relational database.

A user can browse the site and view products from our database, add them to a cart, make a purchase, and view past orders.

Originially titled Nozama, Nozamaps is my personal cloned copy which I have styled and seeded uniquely. The core of the site however, was built together in a team setting. A majority of work was done pairing with one or more team members, and we used GitHub to manage workflow, checking out feature branches, merging, rebasing and pushing together before moving on to the next feature on our list.

## Deployed Sites and GitHub Repositories

- [Deployed Client](https://derekbmcintire.github.io/Nozama-Front-End/)
- [Client GitHub Repository](https://github.com/derekbmcintire/Nozama-Front-End)
- [Deployed API](https://dry-journey-16743.herokuapp.com/)
- [API GitHub Repository](https://github.com/derekbmcintire/Nozama-Back-End)

## Technologies used

Node.js, Express.js, JavaScript, Mongoose, MongoDB

## API Endpoints

### Products
| Verb | URL | Controller#Action |
|------|-----|-------------------|
| GET | /products | products#index |
| GET | /products/:id | products#show |
| POST | /products | products#create |
| PATCH | /products/:id  | products#update  |
| DELETE | /products/:id | products#destroy  |

### Orders
| Verb | URL | Controller#Action |
|------|-----|-------------------|
| GET | /orders | orders#index |
| GET | /orders/:id | orders#show |
| POST | /orders | orders#create |
| PATCH | /orders/:id  | orders#update  |
| DELETE | /orders/:id | orders#destroy  |

### Tokens
| Verb | URL | Controller#Action |
|------|-----|-------------------|
| POST | /tokens | tokens#create |
