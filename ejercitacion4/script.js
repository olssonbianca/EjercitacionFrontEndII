// Solicita una apliacion que Pida al usuario tres links de images
// Crear tres card con las imagenes solicitas

// https://images.unsplash.com/photo-1573435567032-ff5982925350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80

// https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80

// https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1586&q=80

const contenedor = document.querySelector('main')
let contador = 0;

const crearCard = (url, contenedor, numero)=>{
    const card = `<div class="card">
                    <a class="title" href="${url}">Imagen ${numero}</a>
                    <img class="img-responsive" src="${url}" alt="gatito y perrito">
                </div> `
    contenedor.innerHTML += card;
}


while (confirm("¿Quieres ingresar una imagen?")) {
    let url = prompt('Ingrese la URL de la imagen: ');
    contador += 1
    crearCard(url, contenedor, contador)
}



