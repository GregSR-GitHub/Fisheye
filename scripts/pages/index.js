
    async function getPhotographers() {
        // Récupérer les données  dans le json
        let photographersData = [];

        const photographersDataAll = fetch('../data/photographers.json')
        .then(function(result) {
            if (result.ok) {
            return result.json();
            }
        })
        .then(function(value) {
            photographersData = value.photographers;
            return  photographersData;
        })
        .catch(function(error) {
            console.log("Erreur");
        });

        // Retourner le tableau photographers
        return photographersDataAll;
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const photographers = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    