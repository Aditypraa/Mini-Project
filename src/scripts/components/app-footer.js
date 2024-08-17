// TODO 7 :Buatkan Component Footer

class Footer extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #333;
                    color: #fff;
                    text-align: center;
                    padding: 1px 0;
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                }
            </style>
            <footer>
                <p>&copy; 2024 - Bookshelf</p>
            </footer>
        `;
  }
}

customElements.define("app-footer", Footer);
