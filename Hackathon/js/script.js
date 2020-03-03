/*
Header, content container and footer.
Layout should have cards on the homepage in a grid format.
each card should have a picture, title, clickable button 
taking the user to a character detail page.
create search input, this input should filter the character cards,
this should only be triggerd on a click pf a button.*/

// did make a call to api
const baseUrl ="http://api.tvmaze.com/shows";

//and passing the JSON object it returns to a function
fetch(baseUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    loadTv(json);
  })
  .catch(function (error) {
    console.dir(error);
  });


  function loadTv(results){
    const tvShow =document.querySelector("#columngrid")
    for (let i = 0; i < results.length; i++) {
      console.dir(results);

     

      tvShow.innerHTML += `
    <div class="column is-one-quarter">
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
    <img src="${results[i].image.medium}" alt="${results[i].name}">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
       <h3>Rating</h3><bold>${results[i].rating.average}</bold>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">${results[i].name}</p>
        <p><olclass="subtitle is-6 ">${results[i].genres}</ol><p/><br>
        <p>${results[i].network.name}</p>
        <p><time datetime=${results[i].schedule.time}>${results[i].schedule.time}</time>${results[i].schedule.days}</p>
        <div class="buttons">
        <button class="button is-primary">Details</button>
      </div>     
      </div>
    </div>
    `
}
tvShow.innerHTML = card;
  };

  

  
  