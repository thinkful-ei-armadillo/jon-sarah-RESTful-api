'use strict';

/* global shoppingList, store, $, Item, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  // add shopping item
  
  api.getItems()
    .then((items) => {
      items.forEach((item => store.addItem(item)));
      shoppingList.render();
      
    });
});
