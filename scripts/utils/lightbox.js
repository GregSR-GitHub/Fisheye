async function displayLightbox(idPhoto) {
    const modal = document.getElementById("lightbox");
    const photosLightbox = await getPhotos();
    let photoLightboxData = photosLightbox.find(p => p.id == idPhoto);
	modal.style.display = "flex";
    console.log(idPhoto);
    console.log(photosLightbox);
    console.log(photoLightboxData);

    const pictureLightbox = `assets/photos/${photoLightboxData.photographerId}/${photoLightboxData.image}`;
    const videoUrl = `assets/photos/${photoLightboxData.photographerId}/${photoLightboxData.video}`;
    console.log(pictureLightbox);

    const imgL = document.querySelector( '.lightbox_img' );
    console.log(imgL);
    imgL.src = pictureLightbox;
    imgL.alt = photoLightboxData.title;
}

function closeLightbox() {
    const modal = document.getElementById("lightbox");
    modal.style.display = "none";
}
