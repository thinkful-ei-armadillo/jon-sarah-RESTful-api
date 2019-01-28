'use strict';

/* global shoppingList, store, $, Item, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  // add shopping item
  api.getItems()
    .then(res => res.json())
    .then(() => {
      const item= (store.items[0])
      console.log('current name: ' + item.name)
      store.findAndUpdate(item.id, {name: 'foobar'})
      console.log('new name: ' + item.name)
  })
    .then((items) => {
      items.forEach((item => store.addItem(item)));
      shoppingList.render();
      
    });
  
  // edit shopping item
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      const item = items[0];
      return api.updateItem(item.id, {name: 'foobar'})
        .then(() => {
          console.log('updated');
          shoppingList.render();
        });
    });
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