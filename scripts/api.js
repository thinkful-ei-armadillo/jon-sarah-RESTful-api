'use strict';

const api = (function(){
  
  const BASE_URL = `https://thinkful-list-api.herokuapp.com/jon-sarah`;
  
  function apiFetch(...args) {
    let error = false;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = true;
        }
        return res.json();
      })
      .then(data => {
        if (error) throw new Error(data.message);
        return data;
      })
      .catch(err => console.log(err.message));
  }


  function getItems() {
    return apiFetch(`${BASE_URL}/items`);
  }

  /* function getItems() {
    let error = false;
    return fetch(`${BASE_URL}/items`)
      .then(res => {
        if (!res.ok) {
          error = true;
        }
        return res.json();
      })
      .then(data => {
        if(error) throw new Error(data.message);
        return data;
      })
      .catch(err => console.log(err.message));
  } */

  function createItem(name){
    const newItem = JSON.stringify({
      name: name
    });
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body: newItem});
     
  }

  function updateItem(id, updateData) {
    let updatedData = JSON.stringify({
      name: updateData
    }); 
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: updatedData
    });
  }

  function deleteItem(id) {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({id})
    });
  }

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem,
  };

}());
