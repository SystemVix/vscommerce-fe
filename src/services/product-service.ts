import { ProductDto } from "../models/product";

export function findAll() : ProductDto[]
{
   return products;
}

export function findById(id: number) : ProductDto | undefined
{
   return products.find(x => x.id_product === id);
}

let products : ProductDto[] =
[
   {
       "id_product": 1,
       "name": "The Lord of the Rings",
       "priceTable": 90.5,
       "imageUri": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "categories": [
           {
               "id_category": 1,
               "name": "Livros"
           }
       ]
   },
   {
      "id_product": 2,
      "name": "Smart TV",
      "priceTable": 2190.0,
      "imageUri": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "categories": [
          {
              "id_category": 2,
              "name": "Eletrônicos"
          },
          {
              "id_category": 3,
              "name": "Computadores"
          }
      ]
   },
   {
       "id_product": 7,
       "name": "PC Gamer X",
       "priceTable": 1350.0,
       "imageUri": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/7-big.jpg",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "categories": [
           {
               "id_category": 2,
               "name": "Computadores"
           }
       ]
    },
   {
       "id_product": 15,
       "name": "PC Gamer Weed",
       "priceTable": 2200.0,
       "imageUri": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/15-big.jpg",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "categories": [
           {
               "id_category": 2,
               "name": "Computadores"
           }
       ]
   },
   {
       "id_product": 21,
       "name": "PC Gamer Tx",
       "priceTable": 1680.0,
       "imageUri": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/21-big.jpg",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "categories": [
           {
               "id_category": 2,
               "name": "Computadores"
           }
       ]
   },
   {
       "id_product": 17,
       "name": "PC Gamer Turbo",
       "priceTable": 1280.0,
       "imageUri": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/17-big.jpg",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "categories": [
           {
               "id_category": 2,
               "name": "Computadores"
           }
       ]
   },
   {
       "id_product": 20,
       "name": "PC Gamer Tr",
       "priceTable": 1650.0,
       "imageUri": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/20-big.jpg",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "categories": [
           {
               "id_category": 2,
               "name": "Computadores"
           }
       ]
   },
   {
       "id_product": 9,
       "name": "PC Gamer Tera",
       "priceTable": 1950.0,
       "imageUri": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/9-big.jpg",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "categories": [
           {
               "id_category": 2,
               "name": "Computadores"
           }
       ]
   },
   {
       "id_product": 13,
       "name": "PC Gamer Plus",
       "priceTable": 1350.0,
       "imageUri": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/13-big.jpg",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "categories": [
           {
               "id_category": 2,
               "name": "Computadores"
           }
       ]
   },
   {
       "id_product": 11,
       "name": "PC Gamer Nitro",
       "priceTable": 1450.0,
       "imageUri": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/11-big.jpg",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "categories": [
           {
               "id_category": 2,
               "name": "Computadores"
           }
       ]
   },
   {
       "id_product": 23,
       "name": "PC Gamer Min",
       "priceTable": 2250.0,
       "imageUri": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/23-big.jpg",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "categories": [
           {
               "id_category": 2,
               "name": "Computadores"
           }
       ]
   },
   {
       "id_product": 16,
       "name": "PC Gamer Max",
       "priceTable": 2340.0,
       "imageUri": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/16-big.jpg",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "categories": [
           {
               "id_category": 2,
               "name": "Computadores"
           }
       ]
   },
   {
       "id_product": 18,
       "name": "PC Gamer Hot",
       "priceTable": 1450.0,
       "imageUri": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/18-big.jpg",
       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       "categories": [
           {
               "id_category": 2,
               "name": "Computadores"
           }
       ]
   }
]