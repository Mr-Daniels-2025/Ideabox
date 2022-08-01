class Idea {
  constructor(title, body) {
    this.id = Date.now()
    this.title = title
    this.body = body
    this.isStarred = false
  }
  updateIdea() {
    if (!this.isStarred) {
      this.isStarred = true
    } else {
      this.isStarred = false
    }
  }
}
