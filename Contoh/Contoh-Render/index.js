class Heading extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `<h1>Hello Bang</h1>`;
  }
}

customElements.define("my-heading", Heading);

// buatlah versi tombol

class Button extends HTMLElement {
  constructor() {
    super();
    console.log("Bang coba");
    this.innerHTML = `<button>Click Me</button>`;
  }
}

// define custom element
customElements.define("my-button", Button);
