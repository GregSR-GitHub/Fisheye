function photographerFactory(data) {
    const { name, id, city, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;
    const link = `photographer.html?id=${id}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.className = 'photographer_card';
        const a = document.createElement( 'a' );
        a.setAttribute("href", link);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const p = document.createElement( 'p' );
        a.appendChild(img);
        article.appendChild(a);
        article.appendChild(h2);
        article.appendChild(p);
        const spanCity = document.createElement( 'span' );
        spanCity.textContent = city;
        const spanTag = document.createElement( 'span' );
        spanTag.textContent = tagline;
        const spanPrice = document.createElement( 'span' );
        spanPrice.textContent = price + "€/jour";
        p.appendChild(spanCity);
        p.appendChild(spanTag);
        p.appendChild(spanPrice);
        
        return (article);
    }
    return { name, picture, getUserCardDOM }
}

function photographHeaderFactory(data) {
    const { name, city, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const buttun = document.getElementById( 'contact_photographer' );
        const infos = document.querySelector( '.price_section' );
        const contactName = document.querySelector( '.contact_name' );
        contactName.textContent = name; // Affiche le nom du photographe dans le formulaire de contact
        console.log(infos);
        article.className = 'photographer_card';
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", name);
        const p = document.createElement( 'p' );
        article.appendChild(p);
        article.appendChild(buttun);
        article.appendChild(img);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const spanCity = document.createElement( 'span' );
        spanCity.textContent = city;
        const spanTag = document.createElement( 'span' );
        spanTag.textContent = tagline;
        const spanPrice = document.createElement( 'div' );
        spanPrice.textContent = price + "€/jour";
        spanPrice.className = 'price';
        p.appendChild(h2);
        p.appendChild(spanCity);
        p.appendChild(spanTag);
        infos.appendChild(spanPrice);
        
        return (article);
    }
    return { name, picture, getUserCardDOM }
}