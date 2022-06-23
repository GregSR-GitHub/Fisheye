class PhotoFactory {
  constructor (data, counter) {
    this.data = data
    this.id = data.id
    this.title = data.title
    this.photographerId = data.photographerId
    this.likes = data.likes
    this.type = data.type
    this.url = data.url
    this.figure = document.createElement('figure')
    this.figure.className = 'photo_card'
    this.figure.setAttribute('id', 'photo' + this.id)
    this.counter = counter
  }

  handleLikes () {
    const that = this
    this.figure.querySelector('.photo_likes').addEventListener('click', function () {
      event.preventDefault()
      if (this.classList.contains('liked')) {
        this.classList.remove('liked')
        this.innerHTML = that.likes + ' <i class="fa-solid fa-heart" aria-label="likes"></i>'
        that.counter.updateLikes('dislike')
      } else {
        this.classList.add('liked')
        const newLikes = that.likes + 1
        this.innerHTML = newLikes + ' <i class="fa-solid fa-heart" aria-label="likes"></i>'
        that.counter.updateLikes('like')
      }
    })
  }

  showLightbox (link) {
    const that = this
    link.addEventListener('click', function () {
      console.log(link)
      displayLightbox(that.id)
    })
  }

  getCard () {
    const a = new Link('#', this.figure).makeLink()
    a.setAttribute('aria-label', this.title + ',closeup view')
    new Media(this.url, this.title, a, this.type).makeMedia()
    const figcaption = new TextElement('figcaption', '', this.figure).makeElement()
    new TextElement('h2', this.title, figcaption).makeElement()
    const spanLike = new Link('#', figcaption).makeLink()
    spanLike.innerHTML = this.likes + ' <span class="fa-solid fa-heart" aria-label="likes"></span>'
    spanLike.className = 'photo_likes'
    this.handleLikes()
    this.showLightbox(a)

    return this.figure
  }
}
