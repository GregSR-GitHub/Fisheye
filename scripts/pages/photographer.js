//Mettre le code JavaScript lié à la page photographer.html

let params = (new URL(document.location)).searchParams;
let photoArray = [];
let idPhotographer = params.get('id');
console.log(idPhotographer);
const urlData = '../data/photographers.json';

async function getPhotographer() {
    // Récupére les données du photographe parmis les données du Json
    const dataPhotographers = await new Data(urlData).getPhotographers();
    let photographerData = dataPhotographers.find(p => p.id == idPhotographer);
    console.log(photographerData);
    return  photographerData;
}

async function getPhotos() {
    // Récupére les données les photos du photographe dans le json
    const dataPhotos = await new Data(urlData).getPhotos();
    let photoData = dataPhotos.filter(p => p.photographerId == idPhotographer);
    photoArray = photoData;
    return  photoData;
}

async function displayData(photographer) {
    const photographersSection = document.querySelector(".photographer_header");
    const photographerModel = new PhotographerFactory(photographer);
    const userCardDOM = photographerModel.getHeader();
    photographersSection.appendChild(userCardDOM);
};

async function displayPhotoData(photos,counter) {
    const photographersSection = document.querySelector(".photos_section");
    photos.forEach((photo) => {
        const photoData = new Photo(photo);
        console.log(photoData);
        const photoModel = new PhotoFactory(photoData,counter);
        const photoCardDOM = photoModel.getCard();
        photographersSection.appendChild(photoCardDOM);
    });
    await sortBy();
};

async function init() {
    // Récupère les datas des photographes
    const photographer = await getPhotographer();
    const photos = await getPhotos();
    let photosLikesCounter = new likesCounter(photos);
    photosLikesCounter.displayLikes();
    displayPhotoData(photos,photosLikesCounter);
    displayData(photographer);
};

init();