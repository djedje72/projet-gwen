var myVar = 0; 
function myFunction() {
    console.log("test !");
    myVar++;
    console.log("j'ai cliqué "+ myVar +" fois !");
}

function myFunction2(monElement) {
    var toto = document.getElementById("mySpan");
    toto.innerHTML = monElement.value;
}