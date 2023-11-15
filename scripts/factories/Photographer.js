// Design Constructor

class OldPhotograper{
  constructor(data){
    this._name = data.name
    this._id = data.id
    this._city = data.city
    this._country = data.country
    this._tagline = data.tagline
    this._price = data.price
    this._portrait = data.portrait
    this._hashtag1 = data.hashtag1
    this._hashtag2 = data.hashtag2
    this._hashtag3 = data.hashtag3
    this._hashtag4 = data.hashtag4
  }
  get name(){
    return this._name
  }
  get id(){
    return this._id
  }
  get city(){
    return this._city
  }
  get country(){
    return this._country
  }
  get tagline(){
    return this._tagline
  }
  get price(){
    return this._price
  }
  get portrait(){
    return this._portrait
  }

  get hashtag1(){
    return this.hashtag1
  }
  get hashtag2(){
    return this.hashtag2
  }
  get hashtag3(){
    return this.hashtag3
  }
  get hashtag4(){
    return this.hashtag4
  }
  
}

  