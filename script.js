document.getElementById("envio").addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let grupo = document.getElementById("grupo").value;
    let nSala = document.getElementById("nSala").value;

    let data={
        nombre: nombre,
        apellido: apellido,
        grupo: grupo,
        sala: nSala
    };

    fetch(`https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo255`, {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'POST',
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
})