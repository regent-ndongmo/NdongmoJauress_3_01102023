class links {
    link() {
      throw new Error("La méthode link doit être implémentée.");
    }
  }
  
  // Implémentations concrètes de l'interface
  class Portrait extends links {
    link() {
        const portrait = document.createElement('div');
        portrait.setAttribute('class', 'portrait');
        portrait.textContent = '#portrait';
    }
  }
  
  class Art extends links {
    link() {
        const portrait = document.createElement('div');
        portrait.setAttribute('class', 'art');
        portrait.textContent = '#Art';
    }
  }
  
  // Factory
  function createLinks(type) {
    switch (type) {
      case "portrait":
        return new Portrait();
      case "art":
        return new Art();
      default:
        throw new Error("Type de lien non pris en charge : " + type);
    }
  }
  