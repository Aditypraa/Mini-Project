import formValidation from "../../form-validation";

class NoteForm extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    await this.render();
    formValidation(document.getElementById(this.getAttribute("form-id")));
  }

  async render() {
    this.innerHTML = ` <form
            id=${this.getAttribute("form-id")}
            class="card-body c-card form-input"
            data-aos="fade-down"
        >
            <form-control
            label="Judul Catatan"
                input-name="title"
                placeholder="contoh : Belajar JavaScript"
                min-length="5"
                description="Isi dengan judul catatan (min 5 karakter)"
            ></form-control>
            <form-control
            label="Deskripsi Catatan"
                input-name="body"
                placeholder="contoh : Belajar JavaScript itu menyenangkan"
                min-length="8"
                description="Isi dengan deskripsi catatan (min 8 karakter)"
            ></form-control>

            <button class="btn btn-primary" id="save-button">Simpan</button>
        </form>`;
  }
}

customElements.define("note-form", NoteForm);
