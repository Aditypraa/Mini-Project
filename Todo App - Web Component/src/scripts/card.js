// create custom element

class Card extends HTMLElement {
  constructor() {
    super();

    this._name = this.getAttribute("name");
    this._description = this.getAttribute("description");
    this._deadline = this.getAttribute("deadline");
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card">
        <div class="card-body">
            <div>
                <h3>${this._name}</h3>
                <p class="mb-1">${this._description}</p>
                <p style="font-size:0.7rem">Deadline : ${new Date(
                  this._deadline
                ).toLocaleString("id-ID", {
                  dateStyle: "full",
                  timeStyle: "short",
                })}</p>
            </div>
        </div>
    </div>
`;
  }

  attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define("my-card", Card);
