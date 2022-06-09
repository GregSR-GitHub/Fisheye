class PhotoFactory{
    constructor(data,counter)  {
        this.id = data.id
        this.title = data.title
        this.photographerId = data.photographerId
        this.likes = data.likes
        this.type = data.type
        this.url = data.url
        this.article = document.createElement( 'article' );
        this.article.className = 'photo_card';
        this.article.setAttribute("id", "photo" + this.id);
        this.counter = counter;
        }

        handleLikes(){
            const that = this;
            this.article.querySelector(".photo_likes").addEventListener("click", function(){
            if(this.classList.contains("liked")){
               this.classList.remove("liked");
               this.innerHTML = that.likes + " <i class=\"fa-solid fa-heart\" aria-label=\"likes\"></i>";
               that.counter.updateLikes('dislike');
            }else{
               this.classList.add("liked");
               const newLikes = that.likes + 1;
               this.innerHTML = newLikes + " <i class=\"fa-solid fa-heart\" aria-label=\"likes\"></i>";
               that.counter.updateLikes('like');
            }
            })
        
        }    

    getCard() {

        const a = new Link('#', this.article).makeLink();
        a.setAttribute("onclick", "displayLightbox(" + this.id + ")");
        a.setAttribute("aria-label", this.title + ",closeup view")
        // Vérifier si le fichier est une image ou un vidéo.
        if(this.type == 'image'){
            new Image(this.url,this.title,a).makeImage();
         }else if(this.type == 'video'){
            new Video(this.url,a).makeVideo();
         }
        const p = new TextElement('p','',this.article).makeElement();
        new TextElement('h2',this.title,p).makeElement();
        const spanLike = new TextElement('span','', p).makeElement();
        spanLike.innerHTML = this.likes + " <i class=\"fa-solid fa-heart\" aria-label=\"likes\"></i>";
        spanLike.className = 'photo_likes';
        this.handleLikes();
        return this.article;
    }   

}