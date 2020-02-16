/*
Header, content container and footer.
Layout should have cards on the homepage in a grid format.
each card should have a picture, title, clickable button 
taking the user to a character detail page.
create search input, this input should filter the character cards,
this should only be triggerd on a click pf a button.*/

// did make a call to api
const baseUrl = "http://api.tvmaze.com/schedule";

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

// this part is titel and summary of the show is ready

function loadTv(tvShow) {
  // function code her
  const televisionContainer = document.querySelector(".container");
  let image = imageLoader(tvShow);
  // rest of my function code here
  // empty html variabels
  let html = "";
  for (let i = 0; i < tvShow.length; i++) {
    // console.log(tvShow[i].summary);
    html += `<div class= "mainCard">
         ${image}
        <img>${tvShow[i].show.image.medium}>
        <h3>${tvShow[i].name}</h3>
        <p>${tvShow[i].summary}</P>
         </div>`;
  }

  televisionContainer.innerHTML = html;
}







function imageLoader(images) {
  let html = "";

  for (let i = 0; i < images.length; i++) {
    // console.log(images[i].show.image.medium);

    html += `
        <img src="${images[i].show.image.medium}">
         `;
  }
  console.log(html);
  return html;
}
