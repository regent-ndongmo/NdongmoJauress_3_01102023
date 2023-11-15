//Mettre le code JavaScript lié à la page photographer.html
class Photographer {
    constructor(){
        this.$photographersWrapper = document.querySelector('.photographer-wrapper')
        this.photographersApi = new PhotographerApi('../data/photographers.json')
    }

    async main(){
        const photographersData = await this.photographersApi.getPhotographers()

        photographersData
            // .map(photographer => new OldPhotograper(photographer))
            .forEach(photographer => {
            console.log(photographer)
            const Template = new PhotographerInf(photographer)
            this.$photographersWrapper.appendChild(Template.createPhotographerInf())

        });
    }
}

const app = new Photographer()
app.main()