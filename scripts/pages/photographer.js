/* eslint-disable prefer-const */
// Code JavaScript lié à la page photographer.html
let allPhotos = []

class PhotographersPage {
  constructor () {
    this.params = (new URL(document.location)).searchParams
    this.idPhotographer = this.params.get('id')
    this.urlData = 'https://gregsr-github.github.io/Fisheye/data/photographers.json'
    this.photographersSection = document.querySelector('.photographer_header')
    this.photosSection = document.querySelector('.photos_section')
  }

  async getPhotographer () {
    // Récupére les données du photographe parmis les données du Json
    const dataPhotographers = await new Data(this.urlData).getPhotographers()
    let photographerData = dataPhotographers.find(p => p.id == this.idPhotographer)
    console.log(photographerData)
    return photographerData
  }

  async getPhotos () {
    // Récupére les données les photos du photographe dans le json
    const dataPhotos = await new Data(this.urlData).getPhotos()
    let photoData = dataPhotos.filter(p => p.photographerId == this.idPhotographer)
    return photoData
  }

  async displayData (photographer) {
    const photographerModel = new PhotographerFactory(photographer)
    const userCardDOM = photographerModel.getHeader()
    this.photographersSection.appendChild(userCardDOM)
  };

  async displayPhotoData (photos, counter) {
    photos.forEach((photo) => {
      const photoData = new Photo(photo)
      allPhotos.push(photoData)
      const photoCardDOM = new PhotoFactory(photoData, counter).getCard()
      this.photosSection.appendChild(photoCardDOM)
    })
    // Réorganise l'ordre des photos
    await sortBy()
  };

  async init () {
    // Récupère les datas des photographes

    console.log(this.idPhotographer)
    const photographer = await this.getPhotographer()
    const photos = await this.getPhotos()
    let photosLikesCounter = new LikesCounter(photos)
    photosLikesCounter.displayTotalLikes()
    this.displayPhotoData(photos, photosLikesCounter)
    this.displayData(photographer)
  };
}

const page = new PhotographersPage()
page.init()
