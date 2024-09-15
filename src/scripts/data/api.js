import Swal from "sweetalert2";

const BASE_URL = "https://notes-api.dicoding.dev/v2";

function showAlert(error) {
  Swal.fire({
    title: "Error",
    text: error.message,
    icon: "error",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "OK",
  });
}

//  TODO : Buat fungsi untuk memanggil API disini
async function getAllNotes() {
  // DONE
  try {
    const response = await fetch(`${BASE_URL}/notes`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    showAlert(error);
    throw error;
  }
}

async function addNote(note) {
  // DONE
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": "12345",
    },
    body: JSON.stringify(note),
  };

  try {
    const response = await fetch(`${BASE_URL}/notes`, options);
    const data = await response.json();
    return data;
  } catch (error) {
    showAlert(error);
    throw error;
  }
}

// async function editNote(note) {
//   const options = {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       "X-Auth-Token": "12345",
//     },
//     body: JSON.stringify(note),
//   };

//   try {
//     const resonse = await fetch(`${BASE_URL}/edit/${id}`, options);
//     const data = await resonse.json();
//     return data;
//   } catch (error) {
//     showAlert(error);
//     throw error;
//   }
// }

async function deleteNote(id) {
  return fetch(`${BASE_URL}/notes/${id}`, {
    method: "DELETE",
    headers: {
      "X-Auth-Token": "12345",
    },
  })
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => {
      showAlert(error);
      throw error;
    });
}

export { getAllNotes, addNote, deleteNote };
