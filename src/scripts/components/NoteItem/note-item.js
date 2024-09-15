class NoteItem extends HTMLElement {
  static observedAttributes = [
    "id",
    "title",
    "body",
    "createdAt",
    "archived",
    "index",
  ];

  constructor() {
    super();

    this._id = this.getAttribute("id");
    this._title = this.getAttribute("title");
    this._body = this.getAttribute("body");
    this._createdAt = this.getAttribute("createdAt");
    this._archived = this.getAttribute("archived") === "true";
    this._index = parseInt(this.getAttribute("index"));
  }

  // METHOD : untuk memformat waktu dan tanggal
  formatDateTime(dateString) {
    const date = new Date(dateString);

    // Format waktu (24 jam)
    const formattedTime = date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    // Format tanggal (dalam bahasa Indonesia)
    const formattedDate = date.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return `${formattedTime} - ${formattedDate}`;
  }

  handleDelete() {
    this.dispatchEvent(
      new CustomEvent("note-delete", {
        detail: {
          id: this._id,
        },
        bubbles: true,
      }),
    );
  }

  handleUpdate() {
    this.dispatchEvent(
      new CustomEvent("note-update", {
        detail: {
          id: this._id,
        },
        bubbles: true,
      }),
    );
  }

  handleArchive() {
    this.dispatchEvent(
      new CustomEvent("note-archive", {
        detail: {
          id: this._id,
        },
        bubbles: true,
      }),
    );
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="card" data-aos="flip-up" data-aos-duration="500" data-aos-delay="${
              50 * this._index
            }">
                <div>
                    <h4 class="text-title">${this._title}</h4>
                    <p class="text-date">${this.formatDateTime(this._createdAt)}</p> <!-- Memformat waktu dan tanggal -->
                </div>
                <p class="text-body">${this._body}</p>
                <delete-button data-id=${this._id}></delete-button>


                <!-- <edit-button data-id=${this._id}></edit-button> -->
                
                
                <archive-button data-id=${this._id}></archive-button>

            </div>
        `;
    const deleteButton = this.querySelector("delete-button");
    // const editButton = this.querySelector("edit-button");
    const archiveButton = this.querySelector("archive-button");

    if (deleteButton) {
      deleteButton.addEventListener("click", this.handleDelete);
    }
    // if (editButton) {
    //   editButton.addEventListener("click", this.handleUpdate);
    // }
    if (archiveButton) {
      archiveButton.addEventListener("click", this.handleArchive);
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[`_${name}`] = newValue;
    this.render();
  }
}

customElements.define("note-item", NoteItem);
