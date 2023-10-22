class App {
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
            const Template = new PhotographerCard(photographer)
            this.$photographersWrapper.appendChild(Template.createPhotographerCard())

        });
    }
}

const app = new App()
app.main()