class HeaderBar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();

    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "src/styles/index.css");

    this._shadowRoot.appendChild(link);
    this._shadowRoot.innerHTML += `
    <header>
    <nav> 
    <div class="title-app">
    <h1>Note App</h1>
    </div>
    </nav>
    </header>
      `;
  }
}

customElements.define("header-bar", HeaderBar);
