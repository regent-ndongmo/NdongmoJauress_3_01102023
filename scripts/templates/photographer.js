function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const figure = document.createElement('div');
        figure.setAttribute('class', 'figure')
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const textcontainer = document.createElement('div')
        textcontainer.setAttribute('class', 'text-container')
        const h3 = document.createElement('h3');
        h3.textContent = [city , country];
        const text = document.createElement('span');
        text.setAttribute('class', 'tagline');
        text.textContent = tagline;
        const prix = document.createElement('span');
        prix.setAttribute('class', 'price');
        prix.textContent = [price, '$/jour'];
        
        article.appendChild(figure)
        figure.appendChild(img);
        figure.appendChild(h2);
        article.appendChild(textcontainer);
        textcontainer.appendChild(h3);
        textcontainer.appendChild(text);
        textcontainer.appendChild(prix)
        return (article);
    }
    return { name, picture, getUserCardDOM }
}