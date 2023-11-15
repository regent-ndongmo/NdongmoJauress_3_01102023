class PhotographerInf{
    constructor(photographer){
        this._photographer = photographer
    }

    createPhotographerInf(){
        const id = data.id;
        const $wrapper = document.createElement('article');
        $wrapper.classList.add('photographer-wrapper');

        const photographerInf = `
            <h2>
            ${this._photographer.name}
            </h2>
            <div class="text-container">
                <h3>
                    ${this._photographer.city}, ${this._photographer.country} 
                </h3>
                <span class="tagline">${this._photographer.tagline}</span>
                <span class="price">${this._photographer.price}$/jour</span>
            </div>
            <div class="hashtag-container">
                <span class="hashtag">
                    <a href="#">${this._photographer.hashtag1}</a>
                </span>
                <span class="hashtag">
                    <a href="#">${this._photographer.hashtag2}</a>
                </span>
                <span class="hashtag">
                    <a href="#">${this._photographer.hashtag3}</a>
                </span>
                <span class="hashtag">
                    <a href="#">${this._photographer.hashtag4}</a>
                </span>
            </div>
            
        `
        $wrapper.innerHTML = photographerInf

        return $wrapper

    }

}