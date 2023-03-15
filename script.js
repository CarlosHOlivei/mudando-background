function corRGB(){
    var r = Math.floor(Math.random()*(255+1))
    var g = Math.floor(Math.random()*(255+1))
    var b = Math.floor(Math.random()*(255+1))
    return `rgb(${r}, ${g}, ${b})`;
} 
var corAleat = corRGB();
const cores = ["red", "green", corAleat, "#f15025"];
const botao = document.getElementById("botao");
const cor = document.querySelector("#cor");

botao.addEventListener('click', function(){
    var numAleat = Math.floor(Math.random()*cores.length);
    document.body.style.backgroundColor = cores[numAleat];
    cor.textContent = cores[numAleat];
})