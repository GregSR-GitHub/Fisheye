//Mettre le code JavaScript lié à la page photographer.html

let params = (new URL(document.location)).searchParams;
let photoArray = [];
let idPhotographer = params.get('id');
console.log(idPhotographer);

async function getPhotographer() {
    // Récupére les données des photographes dans le json

    const photographersDataAll = fetch('../data/photographers.json')
    .then(function(result) {
        if (result.ok) {
        return result.json();
        }
    })
    .then(function(value) {
        let photographerData = value.photographers.find(p => p.id == idPhotographer);
        console.log(photographerData);
        return  photographerData;
    })
    .catch(function(error) {
        console.log("Erreur");
    });

    // et bien retourner le tableau photographers
    return photographersDataAll;
}

async function getPhotos() {
    // Récupére les données des photos dans le json

    const photographersDataAll = fetch('../data/photographers.json')
    .then(function(result) {
        if (result.ok) {
        return result.json();
        }
    })
    .then(function(value) {
        let photoData = value.media.filter(p => p.photographerId == idPhotographer);
        photoArray = photoData;
        return  photoData;
    })
    .catch(function(error) {
        console.log("Erreur");
    });

    // et bien retourner le tableau photographers
    return photographersDataAll;
}

async function displayData(photographer) {
    const photographersSection = document.querySelector(".photographer_header");
    const photographerModel = photographHeaderFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
};

async function displayPhotoData(photos) {
    const photographersSection = document.querySelector(".photos_section");
    photos.forEach((photo) => {
        console.log(photo);
        const photoModel = photoFactory(photo);
        const photoCardDOM = photoModel.getPhotoCardDOM();
        photographersSection.appendChild(photoCardDOM);
    });
    await sortBy();
};

async function displayPhotoLike(photos) {
    const totalLikeSection = document.querySelector(".total-like");
    let photoTotalLike = 0;
    photos.forEach((photo) => {
        photoTotalLike += photo.likes
    });
    totalLikeSection.innerHTML = photoTotalLike + " <i class=\"fa-solid fa-heart\"></i>";
    console.log(photoTotalLike);
};

async function init() {
    // Récupère les datas des photographes
    const photographer = await getPhotographer();
    const photos = await getPhotos();
    
    displayPhotoData(photos);
    displayPhotoLike(photos);
    displayData(photographer);
};

init();