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

//filtros
const tabsBox = document.querySelector(".tabs-box"),
  allTabs = tabsBox.querySelectorAll(".tab"),
  arrowIcons = document.querySelectorAll(".icon i");
let isDragging = false;
const handleIcons = (scrollVal) => {
  let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
  arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}
arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
    let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
    handleIcons(scrollWidth);
  });
});
allTabs.forEach(tab => {
  tab.addEventListener("click", () => {


    console.log("Filtros:", tab.innerText)


  });
});
const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
  handleIcons(tabsBox.scrollLeft)
}
const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
}
tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


//filtros parte dos card

const tabs = document.querySelectorAll(".tab-pass");

const tab_Nav = function (tabBtnClick) {
  allTabs.forEach((allTab) => {
    allTab.classList.remove("tabAtivo");
  });

  tabs.forEach((tab) => {
    tab.classList.remove("tabAtivo");
  });

  allTabs[tabBtnClick].classList.add("tabAtivo");
  tabs[tabBtnClick].classList.add("tabAtivo");
}

allTabs.forEach((allTab, i) => {
  allTab.addEventListener("click", () => {
    tab_Nav(i);
  });
});

//icones clicados

function mudarAoClicar(like) {
  const iconesClicados = like.parentElement.querySelector(".fa-heart");
  console.log("icon:", iconesClicados);
  iconesClicados.classList.toggle("iconeAtivo");
}

//slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: "#nextOne",
    prevEl: "#prevOne",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 30,
    },

  },
  pagination: {
    el: "#pagOne",
    clickable: true,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: "#nextTwo",
    prevEl: "#prevTwo",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 30,
    },

  },
  pagination: {
    el: "#pagTwo",
    clickable: true,
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: "#next3",
    prevEl: "#prev3",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 30,
    },

  },
  pagination: {
    el: "#pag3",
    clickable: true,
  },
});

var swiper4 = new Swiper(".mySwiper4", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: "#next4",
    prevEl: "#prev4",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 30,
    },

  },
  pagination: {
    el: "#pag4",
    clickable: true,
  },
});

var swiper5 = new Swiper(".mySwiper5", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: "#next5",
    prevEl: "#prev5",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 30,
    },

  },
  pagination: {
    el: "#pag5",
    clickable: true,
  },
});

var swiper6 = new Swiper(".mySwiper6", {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: "#next6",
    prevEl: "#prev6",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 30,
    },

  },
  pagination: {
    el: "#pag6",
    clickable: true,
  },
});



//botão de ler mais

const button = document.getElementById("btnLerMais");

button.addEventListener('click', function () {
  const conteinerCarrossel = document.querySelector(".conteiner-read-more", ".ler-mais-btn");
  conteinerCarrossel.classList.toggle("btnLerMaisAtivo");

  if (conteinerCarrossel.classList.contains("btnLerMaisAtivo")) {
    return button.textContent = "Leia Menos";
  }

  button.textContent = "Leia Mais";
});


const list = document.querySelectorAll(".list");
function linkAtivo() {
  list.forEach((item) =>
    item.classList.remove('linhaAtivo'));
  this.classList.add('linhaAtivo');
};

list.forEach((item) =>
  item.addEventListener('click', linkAtivo)
)


//modal

function pegaProduto(card) {
  const productContainer = card.closest(".card");
  const imgCurso = productContainer.querySelector(".card__thumb a img").getAttribute("src");
  const nomeCurso = productContainer.querySelector(".card__title").textContent;
  const precoTexto = productContainer.querySelector(".preco").innerText;

  //preço formatado
  const valorProdNumero = parseFloat(
    precoTexto.replace("R$", "").replace(",", ".")
  );
  console.log("nome do produto " + nomeCurso);
  console.log("valor do produto " + valorProdNumero);
  console.log("img do produto " + imgCurso);

  //criar uma nova linha na tabela
  const novaLinha = document.createElement("tr");
  novaLinha.innerHTML = `
  <td><img src="${imgCurso}"/></td>
  <td>${nomeCurso}</td>
  <td>R$ ${valorProdNumero.toFixed(2)}</td> 
  <td> <i class="fa fa-trash" style="cursor:pointer" 
  data-bs-toggle="popover" data-bs-placement="right" title="Excluir Registro" 
  data-bs-content="Clique para excluir" onclick="excluirLinha(this)"></i> </td>
  `;

  console.log(novaLinha);

  //adicionar nova linha na tabela
  const tabelaCorpo = document.getElementById("tabelaCorpo");
  tabelaCorpo.appendChild(novaLinha);

  console.log("Tab Corpo", tabelaCorpo)

  valorTotal();

  console.log(valorTotal);
}

function valorTotal() {
  const linhas = document.querySelectorAll("#tabelaCorpo tr");
  let valorTotal = 0;

  linhas.forEach((linha) => {
    const multiplicadoValorTexto =
      linha.querySelector("td:nth-child(3)").textContent;
    const multiplicadoValor = parseFloat(
      multiplicadoValorTexto.replace("R$ ", "")
    );
    valorTotal += multiplicadoValor;
  });

  const elementoTotal = document.querySelector("#valorTotal");
  elementoTotal.textContent = "R$ " + valorTotal.toFixed(2);
}


function excluirLinha(icon) {
  const linha = icon.parentElement.parentElement; // A linha é pai da célula do ícone
  linha.remove();

  // Recalcula e exibe o valor total da compra após a exclusão
  valorTotal();
}


function listaPagamento(card) {
  const productContainer = card.closest(".card");
  // const imgCurso = productContainer.querySelector(".card__thumb a img").getAttribute("src");
  const nomeCurso = productContainer.querySelector(".card__title").textContent;
  const precoTexto = productContainer.querySelector(".preco").innerText;

  //preço formatado
  const valorProdNumero = parseFloat(
    precoTexto.replace("R$", "").replace(",", ".")
  );
  console.log("nome do produto " + nomeCurso);
  console.log("valor do produto " + valorProdNumero);
  // console.log("img do produto " + imgCurso);

  //criar uma nova linha na tabela
  const novaLinha = document.createElement("tr");
  novaLinha.innerHTML = `
  
  <td>${nomeCurso}</td>
  <td>R$ ${valorProdNumero.toFixed(2)}</td> 
  
  `;

  console.log(novaLinha);

  //adicionar nova linha na tabela
  const tabelaCorpo = document.getElementById("tabelaCorpo2");
  tabelaCorpo.appendChild(novaLinha);

  const contarLinha = tabelaCorpo.rows.length;
  const itemsCart = document.getElementById('itemsCarrinho');
  itemsCart.innerHTML = contarLinha;

  // const goToCart = document.querySelector(".carrinho");


  // goToCart.classList.add("antCart");
  // setTimeOut(function () {
  //   goToCart.classList.remove("antCart");
  //   itemsCart.classList.add("shake").contarLinha;
  //   setTimeout(function () {
  //     itemsCart.classList.remove("shake");
  //   }, 500)
  // }, 1000)


console.log("Tab Corpo", tabelaCorpo)

valorTotalPagamento();

console.log(valorTotal);
}

function valorTotalPagamento() {
  const linhas = document.querySelectorAll("#tabelaCorpo2 tr");
  let valorTotal = 0;

  linhas.forEach((linha) => {
    const multiplicadoValorTexto =
      linha.querySelector("td:nth-child(2)").textContent;
    const multiplicadoValor = parseFloat(
      multiplicadoValorTexto.replace("R$ ", "")
    );
    valorTotal += multiplicadoValor;
  });

  const elementoTotal = document.querySelector("#valorTotal2");
  elementoTotal.textContent = "R$ " + valorTotal.toFixed(2);
}


function pegarDados() {
alert("Seu alarme foi criado com Sucesso!");}