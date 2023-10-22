class PhotographerCard{
    constructor(photographer){
        this._photographer = photographer
    }

    createPhotographerCard(){
        const $wrapper = document.createElement('article');
        $wrapper.classList.add('photographer-card-wrapper');

        const photographerCard = `
            <div class="figure center">
                <img
                    alt="${this._photographer.id}"
                    src="${this._photographer.portrait}"    
                />
                <h2>
                    ${this._photographer.name}
                </h2>
            </div>
            <div class="text-container">
                <h3>
                    ${this._photographer.city}, ${this._photographer.country} 
                </h3>
                <span class="tagline">${this._photographer.tagline}</span>
                <span class="price">${this._photographer.price}$/jour</span>
            </div>
            <div class="hashtag-container">
                <span class="hashtag">
                    <a href="#">#Fashion</a>
                </span>
                <span class="hashtag">
                    <a href="#">#Fashion</a>
                </span>
                <span class="hashtag">
                    <a href="#">#Art</a>
                </span>
            </div>
            
        `
        $wrapper.innerHTML = photographerCard

        return $wrapper

    }


    
}