//navbar muda de cor ao scroll
let nav = document.querySelector("nav");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
}

//login
const conteiner = document.getElementById("conteiner");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener('click', () =>{
    conteiner.classList.add("conteinerAtivo")
});

loginBtn.addEventListener('click', () =>{
    conteiner.classList.remove("conteinerAtivo")
});

function entrarPD(){
    const emailEntrar = document.getElementById("entrarEmail").value;
    const senhaEntrar = document.getElementById("entrarSenha").value;

    console.log(emailEntrar);
    console.log(senhaEntrar);
}

function criarPD(){
    const nomeCriar = document.getElementById("criarNome").value;
    const emailCriar = document.getElementById("criarEmail").value;
    const senhaCriar = document.getElementById("criarSenha").value;

    console.log(nomeCriar);
    console.log(emailCriar);
    console.log(senhaCriar);
}