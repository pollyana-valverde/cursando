//barra de pesquisa
const abrirPesquisa = document.querySelector(".lupa-search");
const fecharPesquisa = document.querySelector(".barra-pesquisa");
const iconClose = document.querySelector(".close-search");

function abrirP() {
  fecharPesquisa.classList.remove("open-search");
  iconClose.classList.remove("open-search")
  abrirPesquisa.classList.add("open-search");
};

function fecharP() {
  fecharPesquisa.classList.add("open-search");
  iconClose.classList.add("open-search")
  abrirPesquisa.classList.remove("open-search");
};