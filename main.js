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
    <img class="star" id="${userIdeas[i].id}" src="${whiteStar}" alt="star">
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
  if (event.target.classList.contains("delete")) {
    for (var i = 0; i < userIdeas.length; i++) {
      if (userIdeas[i].id === id) {
        userIdeas.splice(i, 1);
        //miniIdeaBox.innerHTML = "";
      }
      event.target.closest(".mini-idea-box").remove();
    }
  }
}
//sadasd

//Working on this section below:



// miniIdeaBox.addEventListener("click", activateStar);
miniIdeaBox.addEventListener("click", activateStar);

function activateStar() {
  var id = parseInt(event.target.id);
  if (event.target.classList.contains("star")) {
    console.log("star clicked");
    for (var i = 0; i < userIdeas.length; i++) {
      console.log("in the loop");
      if (userIdeas[i].isStarred === false && userIdeas[i].id === id) {
        console.log("isStarted ==== true");
        console.log("userid", userIdeas[i].id);
        console.log(id);
        event.target.src = redStar
        newIdea.updateIdea()
        favoriteIdeas.push(userIdeas)
      } else if (userIdeas[i].isStarred === true && userIdeas[i].id === id){
        event.target.src = whiteStar
        console.log('splice');
        newIdea.updateIdea()
        favoriteIdeas.splice(i, 1);

      }
    }
  }
}

function deleteFavoritedIdeas(event) {
  var id = parseInt(event.target.id)
  if (event.target.classList.contains("star")) {
    for (var i = 0; i < favoriteIdeas.length; i++)
      if (favoriteIdeas[i].id === userIdeas.id) {
        console.log('im working')
        favoriteIdeas.splice(i, 1)
      }
  }
}
