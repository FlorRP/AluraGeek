async function cardList() {
    const parrafoError = document.querySelector("[data-error]");
    try {
        const conexion = await fetch("http://localhost:3000/products");
        const convertir = await conexion.json();

        if (convertir.length === 0) {
            // Muestra el párrafo de error si la respuesta está vacía
            parrafoError.style.display = 'block';
        } else {
            // Oculta el párrafo de error si hay contenido
            parrafoError.style.display = 'none';
        }

        return convertir;
    } catch (error) {
        console.error('Hubo un error:', error);
    }
}

async function creaNuevaCard(name, price, image){
    const conexion = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            name: name,
            price: price,
            image: image
        })
    });

    const conversion= conexion.json();
    return conversion;
}

async function eliminarCard(id){
    const conexion = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
        headers: {"Content-Type":"application/json"}
    });
}

export const conexionAPI = {
    cardList,
    creaNuevaCard,
    eliminarCard
};
