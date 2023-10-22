class Api{
    constructor(url){
        this._url = url
    }

    async get(){
        return fetch(this._url)
        .then(res => res.json())
        .then(res => res.data)
        .catch(err => console.log('Erreur lors de la recuperation des informations', err))
    }
}
class PhotographerApi extends Api{
    constructor(url){
        super(url)
    }

    async getPhotographers(){
        return await this.get()
    }
}