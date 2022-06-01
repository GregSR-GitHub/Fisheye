function photoFactory(data) {
    const { id, title, photographerId, likes, image, video} = data;

    const picture = `assets/photos/${photographerId}/${image}`;
    const videoUrl = `assets/photos/${photographerId}/${video}`;
    const link = `#`;

    function getPhotoCardDOM() {
        const article = document.createElement( 'article' );
        article.className = 'photo_card';
        const a = document.createElement( 'a' );
        a.setAttribute("href", link);
        a.setAttribute("onclick", "displayLightbox(" + id + ")");
        article.appendChild(a);
        // Vérifier si le fichier est une image ou un vidéo.
        if(image){
            const img = document.createElement( 'img' );
            img.setAttribute("src", picture);
            img.setAttribute("alt", title);
            a.appendChild(img);
         }else if(video){
            const extension = videoUrl.split(".")[1];
            console.log(extension);
            const video = document.createElement( 'video' );
            const source= document.createElement( 'source' );
            video.appendChild(source);
            video.setAttribute("controls", true);
            source.setAttribute("src", videoUrl);
            source.setAttribute("type", "video/" + extension);
            a.appendChild(video);
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
