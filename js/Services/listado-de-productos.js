async function cardList(){
    const conexion = await fetch("http://localhost:3000/products");
    const convertir = conexion.json();
    return convertir;
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
