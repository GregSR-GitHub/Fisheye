let imgBefore = '';
let imgAfter = '';

function displayLightbox(idPhoto) {
    const modal = document.getElementById('lightbox');
    const lightboxSection = document.querySelector( '.lightbox_section' );
    const imgL = document.querySelector( '.lightbox_img' );
    const vidL = document.querySelector( '.lightbox_vid' );
    const name = document.querySelector( '.lightbox_name' );
    let photoLightboxData = photoArray.find(p => p.id == idPhoto);
	modal.style.display = "flex";
    console.log(idPhoto);
    console.log(photoLightboxData);

    const pictureLightbox = `assets/photos/${photoLightboxData.photographerId}/${photoLightboxData.image}`;
    const videoUrl = `assets/photos/${photoLightboxData.photographerId}/${photoLightboxData.video}`;
    console.log(pictureLightbox);
    name.innerHTML = photoLightboxData.title;

    if(photoLightboxData.image){
        console.log(imgL);
        imgL.src = pictureLightbox;
        imgL.alt = photoLightboxData.title;
        imgL.style.display = "block";
        if(vidL){ // if a video was load, remove it
            vidL.remove();
        }
    }else if(photoLightboxData.video){
        imgL.style.display = "none";
        const video = new Video(videoUrl,lightboxSection).makeVideo();
        video.className = 'lightbox_vid';
        video.setAttribute("controls", true);
        name.innerHtml = photoLightboxData.title;
    }

    setLightboxArrow(photoLightboxData);


	modal.style.display = "flex";
    modal.setAttribute('aria-hidden', 'false');
    main.setAttribute('aria-hidden', 'true');
    document.body.classList.add("no-scroll");
    // Close modal when escape key is pressed
    document.addEventListener('keydown', e => {
    const keyCode = e.keyCode ? e.keyCode : e.which
    if (modal.getAttribute('aria-hidden') == 'false' && keyCode === 27) {
        closeLightbox();
    }
 })

}

function setLightboxArrow(photoData){

        const arrowLeft = document.querySelector( '.arrow-left' );
        const arrowRight = document.querySelector( '.arrow-right' );
        const imgPosition = photoArray.indexOf(photoData);
        const imgPositionMax = photoArray.length;
        console.log("Position:"+ imgPosition + "/" + imgPositionMax);
        const indexImgLeft = imgPosition - 1;
        const indexImgRight = imgPosition + 1;
        // Left arrow
        if(indexImgLeft >= 0){
            console.log("Left:"+ photoArray[indexImgLeft].id);
            arrowLeft.setAttribute("onclick", "displayLightbox(" + photoArray[indexImgLeft].id + ")");
            arrowLeft.style.display = "block";
        }else{
            arrowLeft.style.display = "none";
        }
        // Right arrow
        if(indexImgRight < imgPositionMax){
            console.log("Right:"+ photoArray[indexImgRight].id);
            arrowRight.setAttribute("onclick", "displayLightbox(" + photoArray[indexImgRight].id + ")");
            arrowRight.style.display = "block";
        }else{
            arrowRight.style.display = "none";
        }
}

function closeLightbox() {
    const modal = document.getElementById("lightbox");
    modal.style.display = "none";
    const vidL = document.querySelector( '.lightbox_vid' );
    //const pictureClass = document.getElementById( 'photo' + idPhoto );
    if(vidL){
        vidL.remove();
    }
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
    main.setAttribute('aria-hidden', 'false');
    document.body.classList.remove("no-scroll");
    //pictureClass.focus();
}
