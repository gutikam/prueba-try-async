const lista = document.getElementById("lista");


async function prueba() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        const items = data.map(dat => `<li>${dat.title}}</li>`).join("");

        lista.innerHTML = items
    } catch (err) {
        console.err("Error al realizar la solicitud: ", err);
    } finally {
        console.log("la operacion ha finalizado");
    }
}

prueba();