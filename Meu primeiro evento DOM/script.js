


var neutro = "Moita"

var cima = "Moit@"

var press = "!Moit@!"


var h1 = document.createElement("h1");
h1.textContent = "Moita";
document.body.appendChild(h1);


h1.addEventListener("mouseover", function (){
    h1.textContent = cima;
})


h1.addEventListener("mouseout", function(){
    h1.textContent = neutro;
})

h1.addEventListener("mousedown", function(){
    h1.textContent = press;
})

h1.addEventListener("mouseup", function(){
    h1.textContent = press;
})













