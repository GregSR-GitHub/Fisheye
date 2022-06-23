class IndexPage {
  constructor () {
    this.urlData = 'https://gregsr-github.github.io/Fisheye/data/photographers.json'
    this.section = document.querySelector('.photographer_section')
  }

  async init () {
    // Récupère les données des photographes
    const photographers = await new Data(this.urlData).getPhotographers()
    photographers.forEach((photographer) => {
      const photographerCardDOM = new PhotographerFactory(photographer).getCard()
      this.section.appendChild(photographerCardDOM)
    })
    console.log(photographers)
  }
}

const page = new IndexPage()
page.init()
