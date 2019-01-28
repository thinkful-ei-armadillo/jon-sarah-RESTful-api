'use strict';

/* global shoppingList, store, $, Item, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems()
    .then(res => res.json())
    .then((items)=> {
      items.forEach((item => store.addItem(item)))
      shoppingList.render();
    })
});

store.items.push(Item.create('apples'));

// api.getItems()
//   .then(res => res.json())
//   .then(res => console.log(res))

console.log(api.BASE_URL);

// api.createItem('pears')
//   .then(res => res.json())
//   .then((newItem) => {
//     return api.getItems();
//   })
//   .then(res => res.json())
//   .then((items) => {
//     console.log(items);
//   })