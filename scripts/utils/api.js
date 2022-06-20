// Récupére les données du json

class Api {
  constructor (url) {
    this.url = url
  }

  async get () {
    return fetch(this.url)
      .then(function (result) {
        if (result.ok) {
          return result.json()
        }
      })
      .then(function (result) {
        return result
      })
      .catch(function (error) {
        if (error) {
          console.log('Erreur')
        }
      })
  }
}

class Data extends Api {
  async getPhotographers () {
    const data = await this.get()
    return data.photographers
  }

  async getPhotos () {
    const data = await this.get()
    return data.media
  }
}
