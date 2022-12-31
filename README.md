# MyStore Frontend Project
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

## Introduction

This project is a Frontend project simulating E-store with Products and Product details features. It is an angular components - services based project written with TypeScript language without DB but JSON file with HttpClient request instead . 

In this file you can find the following :
- Components and Child-Parent component.
- Services and Models.
- Package installation instructions

#### Components:
1. `product-list` to list all products from `product-itm` component.
2. `product-item` (its child of `product-list` component ).
3. `product-item-detail` to show each product description
4. `cart` to show products, amounts and total price.
5. `confirmation`.
6. `layout/header` for header routing.

#### Models and Services:
- We have two services one for `products` and one for `the cart`.
- We have two interfaces `Product` and `CartDetails`.

#### Package installation and run localhost server:
- Install Node.js and `run npm install` to initialize the node_modules. then run `ng serve --port 3000` then navigate  to `http://localhost:3000/`.