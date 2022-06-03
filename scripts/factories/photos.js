function photoFactory(data) {
    const { id, title, photographerId, likes, image, video} = data;

    const picture = `assets/photos/${photographerId}/${image}`;
    const videoUrl = `assets/photos/${photographerId}/${video}`;
    const link = `#`;

    function getPhotoCardDOM() {
        const article = document.createElement( 'article' );
        article.className = 'photo_card';
        article.setAttribute("id", "photo" + id);
        const a = makeLink('#', article);
        a.setAttribute("onclick", "displayLightbox(" + id + ")");
        // Vérifier si le fichier est une image ou un vidéo.
        if(image){
            makeImage(picture,title,a);
         }else if(video){
            makeVideo(videoUrl,a);
         }

        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        const p = document.createElement( 'p' );
        article.appendChild(p);
        const spanLike = document.createElement( 'span' );
        spanLike.innerHTML = likes + " <i class=\"fa-solid fa-heart\"></i>";
        p.appendChild(h2);
        p.appendChild(spanLike);
        
        return (article);
    }
    return { title, picture, getPhotoCardDOM }
}
