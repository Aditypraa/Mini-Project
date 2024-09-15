class ArchiveButton extends HTMLElement {
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
                  button {
                      color: #fff;
                      background-color: gray;
                      width:100%;
                      padding: 6px;
                      border-radius: 4px;
                      border: none;
                      cursor: pointer;
                  }
              </style>
              <button>Archive</button>
          `;
  }
}

customElements.define("archive-button", ArchiveButton);
