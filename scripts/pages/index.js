    const urlData = '../data/photographers.json';
    let photographersData = [];

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerCardDOM = new PhotographerFactory(photographer).getCard();
            photographersSection.appendChild(photographerCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const photographers = await new Data(urlData).getPhotographers();
        console.log(photographers);
        displayData(photographers);
    };
    
    init();
    