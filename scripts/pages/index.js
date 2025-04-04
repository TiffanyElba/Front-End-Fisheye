    
    async function getPhotographers() {
        const reponse = await fetch("./data/photographers.json");
        const data = await reponse.json();
        return data.photographers;
    }
    
    async function displayData(photographers) {

        const sectionPhotographers = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            sectionPhotographers.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const photographers = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    

