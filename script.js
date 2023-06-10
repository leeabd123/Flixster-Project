
let current_page = 1
const apikey = "API_KEY"
let limit = 16
let offset = 0




const btn = document.querySelector('#search-button');
const search_form = document.querySelector('#search-form');
const search_input = document.querySelector('#search-input');
const show_more = document.querySelector(".load-more-movies-btn.hidden");
const preview_window = document.querySelector('#preview');
const body_of_web = document.querySelector('body');
const hide = document.querySelector('hidden-prev')
const a_movie = document.querySelector('full-url')


function displayResults(results) {
  // YOUR CODE HERE  
  if (results.total_results == 0) {
    show_more.classList.add('hidden')

  } else {
    results.results.forEach((element, i) => {
      let img = document.createElement('img');
      img = element.poster_path
      let bigger_img = element.backdrop_path
      let rating = element.vote_average
      let full_url = "http://image.tmdb.org/t/p/w500" + img;
      let bigger_img_pic = "http://image.tmdb.org/t/p/w500" + bigger_img
      let alternate_id = element.title
      let id = element.id
      let overview_portion = element.overview
      preview_window.innerHTML +=
      `
      <div class="insert" id="${id}">
      <div class="hidden-prev" id="${alternate_id}">
       <img class="hidden-inner-portion" src="${bigger_img_pic}">
       <div class="overview-div">
       <h1 class="overview">${overview_portion}</h1>
       </div>
      </div>
        <img class="poster_images" src="${full_url}" alt="${alternate_id}" id="${id}" onclick="showPreview(${id})">
        <div class="inner">
          <h1 class="inner-title">${alternate_id}</h1>
          <div class="inner-inner">
            <img class="star" src="star.png">
            <h1 class="the_rating">${rating}</h1>
          </div>
        </div>
      </div>
      
      `;

      // showPreview(imageElements)

  });
  
    show_more.classList.remove('hidden')
  }


}


async function getGiphyApiResults(searchTerm) {
  // YOUR CODE HERE
  if (searchTerm.trim() == '') {
    console.log("enetered  getgiphy if")

    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&page=${current_page}`)
    const data = await response.json()
    console.log(data)
    displayResults(data)
    return data
  } 
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${apikey}`)
    const data = await response.json()
    console.log(data)
    displayResults(data)
    return data
  
 

}

async function handleShowMore(event) {
  
  // YOUR CODE HERE
  console.log("enetered handleshowmore")
  current_page++
  const data = await getGiphyApiResults(search_input.value)
  displayResults(data)

}

async function handleFormSubmit(event) {
  // YOUR CODE HERE

  // preview_window.innerHTML = '';
  // show_more.classList.add('hidden')
  console.log("enetered  handleformsubmit")


  event.preventDefault()
  console.log(search_input.value)
  await getGiphyApiResults(search_input.value)

  // if (search_input.value.trim() == '') {
  //     page_number+=1
  // } 


  

}


async function searchResults(event) {
  // YOUR CODE HERE

   
  preview_window.innerHTML = ``
  show_more.classList.add('hidden')

  // It clears the window 
  // from the now_playing first so new search results appear


  event.preventDefault()
  console.log(search_input.value)

  handleFormSubmit(event);


  

}

function showPreview(movie_id) {
  
  const imageElement = document.getElementById(movie_id);

  console.log(imageElement)

   const hiddenPrevDiv = imageElement.querySelector('.hidden-prev');

  const relativeTop = imageElement.offsetTop;
  const relativeLeft = imageElement.offsetLeft;

  hiddenPrevDiv.style.position = 'absolute';
  hiddenPrevDiv.style.top = `${relativeTop}px`;
   
  hiddenPrevDiv.style.display = 'block';


  const closeButton = document.createElement('button');
  closeButton.textContent = 'x';
  closeButton.classList.add('close-button');
  hiddenPrevDiv.appendChild(closeButton);
    closeButton.addEventListener('click', () => {
      console.log("eneteredddddd")
     hiddenPrevDiv.style.display = 'none';
     closeButton.removeEventListener('click', clickHandler);

     hiddenPrevDiv.removeChild(closeButton);
     a_movie.removeEventListener('click', clickHandler);

   });
 


  

 
  // hidden-prev.style.display = 'block';
}

// function addClickListener(an_id) {

//   const a_movie = document.getElementById(an_id);
//   // console.log(a_movie)

//   a_movie.addEventListener('click', () => {
//     console.log("Entered show");
//   });
// }


window.onload = function () {
  // YOUR CODE HERE
  
  handleFormSubmit(event); //keeps all the now_playing movies up when
  //window is onloaded

  search_form.addEventListener('input', searchResults) 
  
  // To make it automatically search all I needed to do was 
  // add an event listener to soley the search_form instead of 
  // the search button
  


  show_more.addEventListener('mouseenter', handleShowMore)


  


  // search_form.addEventListener('input', handleFormSubmit)


    // Your code here
//     const imageElements = document.getElementsByClassName('insert'); 

//     console.log(imageElements)

// // const imageArray = [...imageElements];

//     for (let i = 0; i < imageElements.length; i++) {
//       console.log(">>>")

//       const divv = document.querySelector(imageElements[i])
//     }


// imageElements.forEach(imageElement => {
  
//   // console.log("helloo", imageElement)
//   imageElement.addEventListener('click', (event) => {
//     const clickedImage = event.target;
//     showPreview(clickedImage);
//   });
// });






}
