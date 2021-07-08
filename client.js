var btn = document.getElementById("myBtn");
btn.addEventListener("click", getQuote, false);


function getQuote(){
    let xhttp = new XMLHttpRequest();
    let xhttp2 = new XMLHttpRequest();
    var myUrl = "http://localhost:3000";
    let pName = document.getElementById("pName").value
    let pPrice = document.getElementById("pPrice").value
    xhttp.open("POST", myUrl);
    
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    xhttp.send(JSON.stringify({ Nombre_Producto: pName, Precio_Producto: pPrice }))

    xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(xhttp2.responseText)   
            var price = document.createElement("H2");
            price.innerHTML = "Nombre: "+ data.name + " ----- " + "Precio: $" +data.price ;
            document.body.appendChild(price)
        }
    };
    xhttp2.open("GET", "http://localhost:3000", true);
    xhttp2.send()
}