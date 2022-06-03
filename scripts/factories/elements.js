function makeImage(src,alt,parent){
    const img = document.createElement( 'img' );
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);
    parent.appendChild(img);
    return img;
}

function makeVideo(src,parent){
    const extension = src.split(".")[1];
    const video = document.createElement( 'video' );
    const source= document.createElement( 'source' );
    video.appendChild(source);
    source.setAttribute("src", src);
    source.setAttribute("type", "video/" + extension);
    parent.appendChild(video);
    return video;
}

function makeElement(type,content,parent){
    const element = document.createElement( type );
    element.textContent = content;
    parent.appendChild(element);
    return element;
}

function makeLink(href,parent){
    const a = document.createElement( 'a' );
    a.setAttribute("href", href);
    parent.appendChild(a);
    return a;
}