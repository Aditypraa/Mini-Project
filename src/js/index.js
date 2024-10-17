const content = [
    [
        "React sangat populer",
        "Ini membuat pembuatan UI yang kompleks dan interaktif menjadi sangat mudah",
        "Sangat kuat & fleksibel",
        "Memiliki ekosistem yang sangat aktif dan serbaguna"
    ],
    [
        "Components, JSX & Props",
        "State",
        "Hooks (e.g., useEffect())",
        "Dynamic rendering"
    ],
    [
        "Official web page (react.dev)",
        "Next.js (Fullstack framework)",
        "React Native (build native mobile apps with React)"
    ]
];

const btnWhyReact = document.getElementById("btn-why-react"); // mengambil id button dengan id btn-why-react
const btnCoreFeature = document.getElementById("btn-core-features"); // mengambil id button dengan id btn-core-features
const btnResources = document.getElementById("btn-resources"); // mengambil id button dengan id btn-resources
const tabContent = document.getElementById("tab-content"); // mengambil id tab-content

function displayContent(items) { // membuat fungsi displayContent dengan parameter items
    let listContent = ""; // membuat variabel listContent dengan value kosong
    for (const item of items) { // membuat perulangan for of dengan variabel item dari items
        listContent += `<li>${item}</li>`; // menambahkan value listContent dengan tag li dan item
    }
    const list = document.createElement("ul"); // membuat variabel list dengan tag ul
    tabContent.innerHTML = ""; // menghapus isi tabContent
    list.innerHTML = listContent; // menambahkan isi list dengan listContent
    tabContent.append(list); // menambahkan list ke tabContent
}

function highlightButton(btn) {
    // Clear all existing styling / highlights
    btnWhyReact.className = "";  // menghapus class button btnWhyReact
    btnCoreFeature.className = "";
    btnResources.className = "";
    btn.className = "active"; // set new style / highlight
}

function handleClick(event) {
    const btnId = event.target.id; // mengambil id dari event.target
    highlightButton(event.target); // highlight the clicked button
    if (btnId === "btn-why-react") { // jika btnId sama dengan btn-why-react
        displayContent(content[0]); // tampilkan content index ke 0
    } else if (btnId === "btn-core-features") { // jika btnId sama dengan btn-core-features
        displayContent(content[1]); // tampilkan content index ke 1
    } else { // jika tidak ada yang sama
        displayContent(content[2]); // tampilkan content index ke 2
    }
}

displayContent(content[0]); // tampilkan content index ke 0

btnWhyReact.addEventListener("click", handleClick); // menambahkan event listener click pada button btnWhyReact
btnCoreFeature.addEventListener("click", handleClick); // menambahkan event listener click pada button btnCoreFeature
btnResources.addEventListener("click", handleClick); // menambahkan event listener click pada button btnResources
