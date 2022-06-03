function photographerFactory(data) {
    const { name, id, city, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;
    const link = `photographer.html?id=${id}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.className = 'photographer_card';
        const a = makeLink(link, article);
        makeImage(picture,name,a);
        makeElement('h2',name,article);
        const p = makeElement('p','',article);
        makeElement('span',city,p);
        makeElement('span',tagline,p);
        makeElement('span',price + "€/jour", p);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}

function photographHeaderFactory(data) {
    const { name, city, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const button = document.getElementById( 'contact_photographer' );
        const infos = document.querySelector( '.price_section' );
        const contactName = document.querySelector( '.contact_name' );
        contactName.textContent = name; // Affiche le nom du photographe dans le formulaire de contact
        article.className = 'photographer_card';
        const p = makeElement('p','',article);
        article.appendChild(button);
        makeImage(picture,name,article);
        makeElement('h2',name,p);
        makeElement('span',city,p);
        makeElement('span',tagline,p);
        const spanPrice = makeElement('span',price + "€/jour", infos);
        spanPrice.className = 'price';        
        
        return (article);
    }
    return { name, picture, getUserCardDOM }
}