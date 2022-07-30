//global variable
var userIdeas = []
var favoriteIdeas = []
var whiteStar = "./assets/star.svg"
var redStar = "./assets/star-active.svg"


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

var newIdea;

//disableButton()
// event listener
window.addEventListener('load', disableButton)
saveButton.addEventListener('click', saveIdea)
titleBody.addEventListener('input', disableButton);

//functions
function saveIdea() {
  //inputValues()
  newIdea = new Idea(formTitle.value, formBody.value)
  userIdeas.push(newIdea)
  miniIdeaBox.innerHTML = ''
  for (var i = 0; i < userIdeas.length; i++) {
    miniIdeaBox.innerHTML += `
  <article class="mini-idea-box" id="">
    <header class="header-mini-box">
    <img class="star" src="${whiteStar}" alt="star">
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
    // favoriteIdeas.push(userIdeas)
  }
}

//to look into the variable we are targeting here
// miniIdeaBox.addEventListener("click", activateStar);
miniIdeaBox.addEventListener("click", activateStar);

function activateStar(){
  console.log(userIdeas[0].isStarred)
  newIdea.updateIdea()
  //if star is clicked do something/update color of star
  //when color is changed to red update isStarred value to true
  //update the favoritedIdeas array to include the isStarred true values
  
  if(event.target.classList.contains("star")) {
    if(userIdeas[i].isStarred === true){
    event.target.src = redStar
    favoriteIdeas.push(userIdeas)
  } else {
    event.target.src = whiteStar
    favoriteIdeas.splice
  }
}
}
