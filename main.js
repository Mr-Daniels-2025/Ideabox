//global variable
var userIdeas = []
var favoriteIdeas = []

// formInputs
var titleBody = document.getElementById('title-body')
var formTitle = document.querySelector("#form-title")
var formBody = document.querySelector("#form-body")
var searchBar = document.querySelector("#form-search")
var miniIdeaBox = document.querySelector("#mini-idea-innerhtml")

// buttons
var showStarredButton = document.querySelector("#show-ideas-button")
var saveButton = document.querySelector("#form-save")
var searchButton = document.querySelector("#search-button")





//disableButton()
// event listener
window.addEventListener('load', disableButton)
saveButton.addEventListener('click', saveIdea)
titleBody.addEventListener('input', disableButton);

//functions
function saveIdea() {
  inputValues()
  miniIdeaBox.innerHTML = ''
  for (var i = 0; i < userIdeas.length; i++) {
    miniIdeaBox.innerHTML += `
  <article class="mini-idea-box" id="${userIdeas[i].id}">
    <header class="header-mini-box">
    <img class="star" src="./assets/star.svg" alt="star">
    <img id="${userIdeas[i].id}" class="delete" src="./assets/delete.svg" alt="">
    </header>
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
  clearForm()
  saveButton.disabled = true;
  saveButton.classList.add("lighter-color")
}

function clearForm() {
  formTitle.value = ""
  formBody.value = ""
  //    saveButton.disabled = true
}

function disableButton() {
  if (formTitle.value === "" && formBody.value === "" || formTitle.value !== "" && formBody.value === "" || formTitle.value === "" && formBody.value !== "") {
    saveButton.classList.add("lighter-color")
    saveButton.disabled = true
  } else {
    saveButton.classList.remove("lighter-color")
    saveButton.disabled = false
    console.log("not disabled");
  }
}

miniIdeaBox.addEventListener("click", deleteIdea);

function deleteIdea(event) {
  var id = parseInt(event.target.id);
    if(event.target.classList.contains("delete")) {
      for (var i = 0; i < userIdeas.length; i++) {
        if(userIdeas[i].id === id) {
          userIdeas.splice(i, 1);
          //miniIdeaBox.innerHTML = "";
        }
        event.target.closest(".mini-idea-box").remove();
      }
    }
}


//Working on this section below:
function favoritedIdeas(){
  if (userIdeas.isStarred === true) {
    favoriteIdeas.push(userIdeas)
  }
}

var starButtonActive = document.getElementsByClassName("star-active-on-click")
var starButtonInActive = document.getElementsByClassName("star-inactive-on-click")
//to look into the variable we are targeting here
// miniIdeaBox.addEventListener("click", activateStar);
miniIdeaBox.addEventListener("click", activateStar);

function activateStar(){
  userIdeas.isStarred = true
  if(event.target.classList.contains("star")) {
    // alert("debug")
    starButtonInActive.classList.add("hidden")
    starButtonActive.classList.remove("hidden")
}
}
