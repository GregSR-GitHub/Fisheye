
async function displayLightbox(idPhoto) {
    const modal = document.getElementById('lightbox');
    const lightboxSection = document.querySelector( '.lightbox_section' );
    const imgL = document.querySelector( '.lightbox_img' );
    let photoLightboxData = photoArray.find(p => p.id == idPhoto);
	modal.style.display = "flex";
    console.log(idPhoto);
    console.log(photoLightboxData);

    const pictureLightbox = `assets/photos/${photoLightboxData.photographerId}/${photoLightboxData.image}`;
    const videoUrl = `assets/photos/${photoLightboxData.photographerId}/${photoLightboxData.video}`;
    console.log(pictureLightbox);

    if(photoLightboxData.image){
        console.log(imgL);
        imgL.src = pictureLightbox;
        imgL.alt = photoLightboxData.title;
        imgL.style.display = "block";
    }else if(photoLightboxData.video){
        const extension = videoUrl.split(".")[1];
        imgL.style.display = "none";
        const video = document.createElement( 'video' );
        video.className = 'lightbox_vid';
        const source= document.createElement( 'source' );
        video.appendChild(source);
        video.setAttribute("controls", true);
        source.setAttribute("src", videoUrl);
        source.setAttribute("type", "video/" + extension);
        lightboxSection.appendChild(video);
        
    }
}

function closeLightbox() {
    const modal = document.getElementById("lightbox");
    modal.style.display = "none";
    const vidL = document.querySelector( '.lightbox_vid' );
    if(vidL){
        vidL.remove();
    }
}
