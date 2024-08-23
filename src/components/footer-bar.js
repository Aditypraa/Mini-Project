class FooterBar extends HTMLElement {
  _shadowRoot = null;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.emptyContent();

    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "src/styles/index.css");

    this._shadowRoot.appendChild(link);
    this._shadowRoot.innerHTML += `
    <footer>
    <p>&copy; 2024 - Note App Aditya Pratama</p>
    </footer>
        `;
  }
}

customElements.define("footer-bar", FooterBar);
