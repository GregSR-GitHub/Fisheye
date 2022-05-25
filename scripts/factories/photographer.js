function photographerFactory(data) {
    const { name, city, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.className = 'photographer_card';
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const p = document.createElement( 'p' );
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p);
        const spanCity = document.createElement( 'span' );
        spanCity.textContent = city;
        const spanTag = document.createElement( 'span' );
        spanTag.textContent = tagline;
        const spanPrice = document.createElement( 'span' );
        spanPrice.textContent = price;
        p.appendChild(spanCity);
        p.appendChild(spanTag);
        p.appendChild(spanPrice);
        
        return (article);
    }
    return { name, picture, getUserCardDOM }
}