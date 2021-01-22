function deleteprod(id) {
    const con = window.confirm('esta seguro de relizar la accion ');
    if (con == true) {
        alert(' el producto se eliminara');

        fetch('http://localhost:3000/api/menus/deletecom/' + id, {
                method: 'POST'
            }).then(response => response.json())
            .then(data => console.log(data));
    }
}

function subiryenviar() {


    var nombre = document.getElementsByName('nombre');
    var descripcion = document.getElementsByName('descripcion');
    var valor = document.getElementsByName('valor');
    document.write(valor + descripcion + nombre);

    // fetch('http://localhost:3000/api/menus/agregar/' + nombre + '/' + descripcion + '/' + valor, {
    //     method: 'POST'
    // }).then(response => console.log(response)).catch(err => console.log(err));
}