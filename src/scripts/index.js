import "./components/index.js";
import Swal, * as Sweetalert2 from "sweetalert2";
import AOS from "aos";
import "../styles/style.css";
import "aos/dist/aos.css";
import { getAllNotes, addNote, deleteNote } from "./data/api.js";
const formInput = document.getElementById("add-form");

const RENDER_EVENT = "RENDER_EVENT";

function createNoteElement(noteItem, index) {
  const noteElement = document.createElement("note-item");
  noteElement.setAttribute("id", noteItem.id);
  noteElement.setAttribute("title", noteItem.title);
  noteElement.setAttribute("body", noteItem.body);
  noteElement.setAttribute("createdAt", noteItem.createdAt);
  noteElement.setAttribute("archived", noteItem.archived);
  noteElement.setAttribute("index", index);
  noteElement.addEventListener("note-delete", (event) => {
    deleteNoteHandler(noteItem.id);
  });
  noteElement.addEventListener("note-update", (event) => {
    updateNoteHandler(noteItem.id, noteItem.title, noteItem.body);
  });
  return noteElement;
}

// GET ALL NOTES
document.addEventListener(RENDER_EVENT, async function () {
  const noteList = document.getElementById("note-lists");
  const loadingIndicator = document.createElement("loading-indicator");

  noteList.parentElement.insertBefore(loadingIndicator, noteList);

  // GET ALL NOTES
  const NOTES = await getAllNotes();

  noteList.innerHTML = "";
  let index = 1;
  for (const noteItem of NOTES) {
    noteList.append(createNoteElement(noteItem, index));
    index++;
  }
  loadingIndicator.remove();
});

// AOS
document.addEventListener("DOMContentLoaded", async () => {
  AOS.init();

  document.dispatchEvent(new Event(RENDER_EVENT));
});

// ADD NOTE
formInput.addEventListener("submit", async (e) => {
  e.preventDefault();

  const loadingOverlay = document.createElement("loading-overlay");
  document.body.appendChild(loadingOverlay);

  const title = formInput.elements.title.value;
  const body = formInput.elements.body.value;

  const newNote = {
    title,
    body,
  };

  // TODO : panggil function addBook
  try {
    await addNote(newNote);
    setTimeout(() => {
      Sweetalert2.fire({
        title: "Anda Berhasil Menambahkan Catatan Baru",
        icon: "success",
        confirmButtonText: "OK",
      });
      loadingOverlay.remove();
    }, 1000);
    document.dispatchEvent(new Event(RENDER_EVENT));
    formInput.reset();
  } catch {
    Sweetalert2.fire({
      title: "Note gagal dihapus",
      icon: "error",
      showConfirmButton: false,
      timer: 3000,
    });
    document.dispatchEvent(new Event(RENDER_EVENT));
    loadingOverlay.remove();
  }
});

// async function updateBookHandler(bookId, title, author) {
//   await Sweetalert2.fire({
//     title: "Edit Buku",
//     html: `
//       <note-form form-id="edit-form"></note-form>
//     `,
//     focusConfirm: false,
//     showCancelButton: true,
//     showConfirmButton: false,
//     cancelButtonText: "Batal",

//     customClass: {
//       htmlContainer: "align-left",
//       actions: "edit-actions",
//       cancelButton: "cancel-edit-button",
//     },
//     didRender: () => {
//       const formEdit = document.getElementById("edit-form");
//       formEdit.elements.title.value = title;
//       formEdit.elements.author.value = author;
//       formEdit.addEventListener("submit", async (e) => {
//         e.preventDefault();

//         const title = formEdit.elements.title.value;
//         const author = formEdit.elements.author.value;
//         const loadingOverlay = document.createElement("loading-overlay");
//         document.body.appendChild(loadingOverlay);

//         const newBook = {
//           id: bookId,
//           title,
//           author,
//         };

//         // TODO : panggil function editBook
//         try {
//           await editBook(newBook);

//           setTimeout(() => {
//             Sweetalert2.fire({
//               title: "Buku berhasil diubah",
//               icon: "success",
//               confirmButtonText: "OK",
//             });
//             document.dispatchEvent(new Event(RENDER_EVENT));
//             loadingOverlay.remove();
//           }, 1000);

//           formEdit.reset();
//         } catch {
//           Sweetalert2.fire({
//             title: "Buku gagal dihapus",
//             icon: "error",
//             showConfirmButton: false,
//             timer: 3000,
//             position: "top-end",
//           });
//           document.dispatchEvent(new Event(RENDER_EVENT));
//           loadingOverlay.remove();
//         }
//       });
//     },
//   });
// }

function deleteNoteHandler(noteId) {
  Sweetalert2.fire({
    title: "Apakah Anda Ingin Menghapus Catatan?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya",
    cancelButtonText: "Batal",
    cancelButtonColor: "#dc3545",
    confirmButtonColor: "#007bff",
  }).then(async (result) => {
    if (result.isConfirmed) {
      // TODO : panggil function deleteNote
      const loadingOverlay = document.createElement("loading-overlay");
      document.body.appendChild(loadingOverlay);

      try {
        await deleteNote(noteId);
        setTimeout(() => {
          Sweetalert2.fire({
            title: "Catatan berhasil dihapus",
            icon: "success",
            showConfirmButton: false,
            timer: 3000,
          });
          document.dispatchEvent(new Event(RENDER_EVENT));
          loadingOverlay.remove();
        }, 1000);
      } catch {
        Sweetalert2.fire({
          title: "Catatan gagal dihapus",
          icon: "error",
          showConfirmButton: false,
          timer: 3000,
        });
        document.dispatchEvent(new Event(RENDER_EVENT));
        loadingOverlay.remove();
      }
    }
  });
}
