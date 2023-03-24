// contador
let count = 0;

//Selecionando o Valor e os Botões
const num = document.querySelector("#number");
const btns = document.querySelectorAll(".button");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--
        }
        else if(styles.contains("increase")){
            count++
        }
        else{
            count=0;
        }
        if(count<0){
            num.style.color = "red";
        }
        else if(count>0){
            num.style.color = "green";
        }
        else{
            num.style.color ="rgb(53, 59, 80)"
        }
        
        num.textContent = count;
    })
})

