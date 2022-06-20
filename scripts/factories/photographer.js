class PhotographerFactory {
  constructor (data) {
    this.name = data.name
    this.city = data.city
    this.tagline = data.tagline
    this.price = data.price
    this.name = data.name
    this.picture = `assets/photographers/${data.portrait}`
    this.link = `photographer.html?id=${data.id}`
  }

  getCard () {
    const article = document.createElement('article')
    article.className = 'photographer_card'
    const a = new Link(this.link, article).makeLink()
    a.setAttribute('aria-label', this.name)
    new Image(this.picture, '', a).makeImage()
    new TextElement('h2', this.name, a).makeElement()
    const p = new TextElement('p', '', article).makeElement()
    new TextElement('span', this.city, p).makeElement()
    new TextElement('span', this.tagline, p).makeElement()
    new TextElement('span', this.price + '€/jour', p).makeElement()

    return article
  }

  getHeader () {
    const article = document.createElement('article')
    const button = document.getElementById('contact_photographer')
    const infos = document.querySelector('.price_section')
    const contactName = document.querySelector('.contact_name')
    contactName.textContent = this.name // Affiche le nom du photographe dans le formulaire de contact
    article.className = 'photographer_card'
    const p = new TextElement('p', '', article).makeElement()
    article.appendChild(button)
    new Image(this.picture, this.name, article).makeImage()
    new TextElement('h2', this.name, p).makeElement()
    new TextElement('span', this.city, p).makeElement()
    new TextElement('span', this.tagline, p).makeElement()
    const spanPrice = new TextElement('span', this.price + '€/jour', infos).makeElement()
    spanPrice.className = 'price'

    return article
  }
}
