class Idea{
  constructor(title, body){
    this.id = Date.now()
    this.title = title
    this.body = body
    this.isStarred = false
  }

}

function inputValues(){
  var newIdea = new Idea(formTitle.value, formBody.value)
  userIdeas.push(newIdea)
}
