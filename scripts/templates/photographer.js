function photographerTemplate(data) {
    const { name, city, country, tagline, price, portrait, id } = data;

    const picture = `${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );


        const link = document.createElement("a");
        link.href = `photographer.html?id=${id}`;
        link.setAttribute("aria-label", `Voir la page de ${name}`);

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Portrait de ${name}`); 

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const locationElement = document.createElement('p');
        locationElement.innerText = `${city}, ${country}`;
        locationElement.classList.add("location"); 
        locationElement.setAttribute("aria-label", `Localisation : ${city}, ${country}`);


        const taglineElement = document.createElement('p');
        taglineElement.innerText = tagline;
        taglineElement.classList.add("tagline"); 
        taglineElement.setAttribute("aria-label", `Slogan : ${tagline}`); 


        const priceElement = document.createElement('p');
        priceElement.innerText = `${price}€/jour`;
        priceElement.classList.add("price"); 
        priceElement.setAttribute("aria-label", `Tarif journalier : ${price}`); 

        link.appendChild(img);
        link.appendChild(h2);

        article.appendChild(link);
        article.appendChild(locationElement);
        article.appendChild(taglineElement);
        article.appendChild(priceElement);
        
        
       
    

        return (article);
    }
    return { name, picture, getUserCardDOM }
}