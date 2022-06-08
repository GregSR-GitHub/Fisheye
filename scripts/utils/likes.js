class likesCounter{
    constructor(photos) {
    this.totalLikeSection = document.querySelector(".total-like");
    this.userLike = 0;
    this.photosLike = 0;
    this.photoTotalLike = this.userLike +  this.photosLike;
    this.photos = photos;
    }

    displayLikes(){ 
    this.photos.forEach((photo) => {
        this.photosLike += photo.likes
    });
    this.photoTotalLike = this.userLike +  this.photosLike;
    this.totalLikeSection.innerHTML = this.photoTotalLike + " <i class=\"fa-solid fa-heart\"></i>";
    console.log("Total likes:" + this.photoTotalLike);
        }

    updateLikes(action){ 
        if(action == 'like'){
            this.userLike ++;
            this.photoTotalLike = this.userLike +  this.photosLike;
            this.totalLikeSection.innerHTML = this.photoTotalLike + " <i class=\"fa-solid fa-heart\"></i>";
            console.log("Update total likes (like):" + this.photoTotalLike);
        }else if(action == 'dislike'){
            this.userLike --;
            this.photoTotalLike = this.userLike +  this.photosLike;
            this.totalLikeSection.innerHTML = this.photoTotalLike + " <i class=\"fa-solid fa-heart\"></i>";
            console.log("Update total likes (dislike):" + this.photoTotalLike);
        }
        }
    }
