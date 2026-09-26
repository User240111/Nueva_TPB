const modal = document.getElementById("modalImagen");
const imagenModal = document.getElementById("imagenModal");

function abrirMiniaturaModal(src) {
    imagenModal.src = src;
    modal.classList.add("activo");
}

function abrirImagen() {
    imagenModal.src = "The pinguin league 5/Carta_responsiva.jpeg";
    modal.classList.add("activo");
}

function cerrarImagen() {
    modal.classList.remove("activo");
}

function cerrarSiEsFondo(e) {
    if (e.target === modal) {
        cerrarImagen();
    }
}