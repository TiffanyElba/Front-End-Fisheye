//Mettre le code JavaScript lié à la page photographer.html
const params = new URLSearchParams(window.location.search);
const photographerId = params.get("id");

console.log(photographerId);


async function getPhotographerData() {
    const response = await fetch("./data/photographers.json"); // Mets le bon chemin
    const data = await response.json();

    // Trouver le photographe correspondant à l'ID récupéré dans l'URL
    const photographer = data.photographers.find(p => p.id == photographerId);

    if (photographer) {
        displayPhotographer(photographer);
    } else {
        console.error("erreur");
    }
}

getPhotographerData();


function displayPhotographer(photographer) {
    const photographerHeader = document.querySelector(".photograph-header");

    // Créer les éléments HTML dynamiquement
    const photographerProfile = document.createElement("div");
    photographerProfile.classList.add("photographer-profile");

    const photographerDetails = document.createElement("div");
    photographerDetails.classList.add("photographer-details");

    const photographerName = document.createElement("h1");
    photographerName.textContent = photographer.name;
    photographerName.classList.add("photographer_name");

    const photographerLocation = document.createElement("p");
    photographerLocation.textContent = `${photographer.city}, ${photographer.country}`;
    photographerLocation.classList.add("photographer_city-country");

    const photographerTagline = document.createElement("p");
    photographerTagline.textContent = `${photographer.tagline}`;
    photographerTagline.classList.add("photographer_tagline");

    const photographerImage = document.createElement("img");
    photographerImage.setAttribute("src", `${photographer.portrait}`);
    photographerImage.classList.add("photographer_img")
    photographerImage.setAttribute("alt", photographer.name);

    const photographerContact = document.querySelector(".contact_button");


    photographerProfile.appendChild(photographerDetails);
    photographerProfile.appendChild(photographerContact);
    photographerProfile.appendChild(photographerImage);
    
    photographerDetails.appendChild(photographerName);
    photographerDetails.appendChild(photographerLocation);
    photographerDetails.appendChild(photographerTagline);


    photographerHeader.appendChild(photographerProfile);
}

