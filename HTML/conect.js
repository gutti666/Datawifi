const url = "http://localhost:3000";
fetch('http://localhost:3000/api/menus/')
    .then(response => response.json())
    .then(data => data.forEach(element => {
        document.write("<a href='cont.php?id=" + element['id'] + "'>" + element['nombre'] + '<br>');
    }));