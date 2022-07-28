// formInputs
var formTitle = document.querySelector("#form-title")
var formBody = document.querySelector("#form-body")
var searchBar = document.querySelector("#form-search")
var miniIdeaBox = document.querySelector("#mini-idea-innerhtml")

// buttons
var showStarredButton = document.querySelector("#show-ideas-button")
var saveButton = document.querySelector("#form-save")
var searchButton = document.querySelector("#search-button")

//global variable
var userIdeas = []

// event listener
saveButton.addEventListener('click', saveIdea)

//functions
function saveIdea(){
  inputValues()
  miniIdeaBox.innerHTML = ''
  for (var i = 0; i < userIdeas.length; i++){
    miniIdeaBox.innerHTML += `
    <article class="mini-idea-box">
      <header class="header-mini-box"> <img class="star" src="./assets/star.svg" alt="star"> <img class="delete" src="./assets/delete.svg" alt=""> </header>
      <section class="mini-body-content">
        <h1>${userIdeas[i].title}</h1>
        <p>${userIdeas[i].body}</p>
      </section>
      <section class="comment-section">
        <img class="comment-img" src="./assets/comment.svg" alt="">
        <h5 for="">Comment</h5>
      </section>
    </article>`
  }
}
