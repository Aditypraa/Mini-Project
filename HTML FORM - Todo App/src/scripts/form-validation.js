const formValidation = () => {
  const formInput = document.getElementById("form-input");

  const blurEventHandler = (event) => {
    // Validate the field
    const isValid = event.target.validity.valid;
    const errorMessage = event.target.validationMessage;

    const connectedValidationId = event.target.getAttribute("aria-describedby");
    const connectedValidationEl = connectedValidationId
      ? document.getElementById(connectedValidationId)
      : null;

    if (connectedValidationEl && errorMessage && !isValid) {
      connectedValidationEl.innerText = errorMessage;
      connectedValidationEl.classList.remove("text-dark");
      connectedValidationEl.classList.add("text-danger");
    } else {
      connectedValidationEl.innerText =
        connectedValidationEl.dataset.defaulttext || "";
      console.log(connectedValidationEl.dataset);
      connectedValidationEl.classList.remove("text-danger");
      connectedValidationEl.classList.add("text-dark");
    }
  };

  // **DONE** TODO 12 : Validasi input nama
  const inputName = formInput.elements.name;
  // **DONE** TODO 12.a : Buat fungsi event handler untuk validasi nama
  const customValidationNameHandler = (event) => {
    event.target.setCustomValidity("");
    // **DONE** TODO 12.b : Validasi jika tidak diisi
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Nama tidak boleh kosong");
      return;
    }

    // **DONE** TODO 12.c : Validasi jika terlalu pendek
    if (event.target.validity.tooShort) {
      event.target.setCustomValidity("Nama minimal terdiri dari 3 karakter");
      return;
    }
  };

  // **DONE** TODO 12.d : Jadikan fungsi sebelumnya event listener untuk event change dan invalid
  inputName.addEventListener("change", customValidationNameHandler);
  inputName.addEventListener("invalid", customValidationNameHandler);

  // **DONE** TODO 12.e : Tambahkan event handler khusus untuk event blur
  inputName.addEventListener("blur", blurEventHandler);

  // **DONE** TODO 13 : Validasi input deskripsi
  const inputDescription = formInput.elements.description;

  // **DONE** TODO 13.a : Buat fungsi event handler untuk validasi deskripsi
  const customValidationDescriptionHandler = (event) => {
    event.target.setCustomValidity("");
    // **DONE** TODO 13.b : Validasi jika tidak diisi
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Deskripsi tidak boleh kosong");
      return;
    }

    // **DONE** TODO 13.c : Validasi jika terlalu pendek
    if (event.target.validity.tooShort) {
      event.target.setCustomValidity(
        "Deskripsi minimal terdiri dari 5 karakter"
      );
      return;
    }
  };

  //**DONE** TODO 13.d : Jadikan fungsi sebelumnya event listener untuk event change dan invalid
  inputDescription.addEventListener(
    "change",
    customValidationDescriptionHandler
  );
  inputDescription.addEventListener(
    "invalid",
    customValidationDescriptionHandler
  );

  //**DONE** TODO 13.e : Tambahkan event handler khusus untuk event blur
  inputDescription.addEventListener("blur", blurEventHandler);

  //**DONE** TODO 14 : Validasi input deadline
  const inputDeadline = formInput.elements.deadline;

  //**DONE** TODO 14.a : Buat fungsi event handler untuk validasi deskripsi
  const customValidationDeadlineHandler = (event) => {
    event.target.setCustomValidity("");

    //**DONE** TODO 14.b : Validasi jika tidak diisi
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Deadline tidak boleh kosong");
      return;
    }

    //**DONE** TODO 14.c : Validasi tanggal deadline harus lebih besar atau sama dengan tanggal sekarang
    if (new Date(inputDeadline.value) < new Date()) {
      event.target.setCustomValidity(
        "Deadline harus lebih besar atau sama dengan tanggal sekarang"
      );
      return;
    }
  };

  //**DONE** TODO 14.d : Jadikan fungsi sebelumnya event listener untuk event change dan invalid
  inputDeadline.addEventListener("change", customValidationDeadlineHandler);
  inputDeadline.addEventListener("invalid", customValidationDeadlineHandler);

  //**DONE** TODO 14.e : Tambahkan event handler khusus untuk event blur
  inputDeadline.addEventListener("blur", blurEventHandler);
};

export default formValidation;
