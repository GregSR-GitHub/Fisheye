function photoFactory(data) {
    const { title, photographerId, likes, image, video} = data;

    const picture = `assets/photos/${photographerId}/${image}`;
    const videoUrl = `assets/photos/${photographerId}/${video}`;

    function getPhotoCardDOM() {
        const article = document.createElement( 'article' );
        article.className = 'photo_card';
        // Vérifier si le fichier est une image ou un vidéo.
        if(image){
            const img = document.createElement( 'img' );
            img.setAttribute("src", picture);
            img.setAttribute("alt", title);
            article.appendChild(img);
         }else if(video){
            const extension = videoUrl.split(".")[1];
            console.log(extension);
            const video = document.createElement( 'video' );
            video.setAttribute("src", videoUrl);
            video.setAttribute("type", "video/" + extension);
            article.appendChild(video);
         }

        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        const p = document.createElement( 'p' );
        article.appendChild(p);
        const spanLike = document.createElement( 'span' );
        spanLike.textContent = likes;
        p.appendChild(h2);
        p.appendChild(spanLike);
        
        return (article);
    }
    return { title, picture, getPhotoCardDOM }
}
