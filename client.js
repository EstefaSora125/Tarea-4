var btn = document.getElementById("myBtn");
btn.addEventListener("click", getQuote, false);

function getQuote(){
    let xhttp = new XMLHttpRequest();
    var myUrl = "http://localhost:3000";
    let pName = document.getElementById("pName").value
    let pPrice = document.getElementById("pPrice").value
    xhttp.open("POST", myUrl);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({ Nombre_Producto: pName, Precio_Producto: pPrice }))
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var text = document.createElement("h2");
            text.innerHTML = xhttp.responseText;
            document.body.appendChild(text)
        }
    };
    xhttp.open("GET", "http://localhost:3000", true);
    xhttp.send()
}