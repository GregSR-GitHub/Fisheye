class Photo{
    constructor(data)  {
        this._id = data.id
        this._title = data.title
        this._photographerId = data.photographerId
        this._likes = data.likes
        this._price = data.price
        this._image = data.image
        this._video = data.video
        }

    get id(){
        return this._id;
    }   
    get title(){
        return this._title;
    }   
    get photographerId(){
        return this._photographerId;
    }   
    get likes(){
        return this._likes
    }
    get price(){
        return this._price
    }
    get type(){
        if(this._image){
            return 'image'
        }else if(this._video){
            return 'video'
        }else{
            return 'none'
        }
    }
    get url(){
        if(this._image){
            return `assets/photos/${this._photographerId}/${this._image}`;
        }else if(this._video){
            return `assets/photos/${this._photographerId}/${this._video}`;
        }else{
            return 'assets/photographers/account.png'
        }
    }

}