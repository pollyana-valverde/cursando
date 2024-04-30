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

//icones clicados - coracao

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

//modal lista carrinho

function pegaProduto(card) {
  const productContainer = card.closest(".card");
  const imgCurso = productContainer.querySelector(".card__thumb a img").getAttribute("src");
  const nomeCurso = productContainer.querySelector(".card__title").textContent;
  const criadorCurso = productContainer.querySelector(".card__subtitle").textContent;
  const precoTexto = productContainer.querySelector(".preco").innerText;


  //preço formatado
  const valorProdNumero = parseFloat(
    precoTexto.replace("R$", "").replace(",", ".")
  );

  console.log("nome do produto " + nomeCurso);
  console.log("nome do produto " + criadorCurso);
  console.log("valor do produto " + valorProdNumero);
  console.log("img do produto " + imgCurso);


  //criar uma nova linha na tabela
  const novaLinha = document.createElement("div");
  novaLinha.innerHTML = `
  <div class="tabela_item d-flex">
    <div class="info_prod_tabela d-flex">
      <img src="${imgCurso}">
      <div id="pegaPreco" class="txt_tabela_item d-block">
        <a href="pre-pagamento.html">
          <h4>${nomeCurso}</h4>
        </a>
        <h6>Por ${criadorCurso}</h6>
        <h5 class="preco_curso">R$ ${valorProdNumero.toFixed(2)}</h5>
      </div>
    </div>
    <div class="exc_tabela_item">
      <i class="fa fa-trash" style="cursor:pointer"
        data-bs-toggle="popover" data-bs-placement="right"
        title="Excluir Registro"
        data-bs-content="Clique para excluir"
        onclick="excluirLinha(this)"></i>
      <h6 onclick="excluirLinha(this)">Salvar para mais tarde</h6>
      <h6  onclick="excluirLinha(this)">Mover para lista de desejos</h6>
    </div>
  </div>
  `;

  console.log(novaLinha);


  //adicionar nova linha na tabela
  const tabelaCorpo = document.getElementById("tabelaCorpo");
  tabelaCorpo.appendChild(novaLinha);

  console.log("Tab Corpo", tabelaCorpo)

   valorTotal();

  console.log(valorTotal);
}


//calcula e mostar valor total

function valorTotal() {
  const linhas = document.querySelectorAll(".tabela_item");
  console.log("oioioio: ", linhas)
  let valorTotal = 0;
  
  linhas.forEach((linha) => {
    const multiplicadoValorTexto = linha.querySelector(".preco_curso").textContent;
    const multiplicadoValor = parseFloat(multiplicadoValorTexto.replace("R$ ", ""));
     console.log("OPAAAA: ", multiplicadoValor)
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

//final modal lista carrinho



//modal de finalização de pagamento

function listaPagamento(card) {
  const productContainer = card.closest(".card");
  const imgCurso = productContainer.querySelector(".card__thumb a img").getAttribute("src");
  const nomeCurso = productContainer.querySelector(".card__title").textContent;
  const criadorCurso = productContainer.querySelector(".card__subtitle").textContent;
  const precoTexto = productContainer.querySelector(".preco").innerText;


  //preço formatado
  const valorProdNumero = parseFloat(
    precoTexto.replace("R$", "").replace(",", ".")
  );

  console.log("nome do produto " + nomeCurso);
  console.log("nome do produto " + criadorCurso);
  console.log("valor do produto " + valorProdNumero);
  console.log("img do produto " + imgCurso);


  //criar uma nova linha na tabela
  const novaLinha = document.createElement("div");
  novaLinha.innerHTML = `
  <div class="tabela_item_2 d-flex">
    <div class="info_prod_tabela_2 d-flex">
      <img src="${imgCurso}">
      <div class="txt_tabela_item_2 d-block">
        <a href="pre-pagamento.html">
          <h4>${nomeCurso}</h4>
        </a>
        <h6>Por ${criadorCurso}</h6>
        <h5 class="preco_curso">R$ ${valorProdNumero.toFixed(2)}</h5>
      </div>
    </div>
  </div>
  `;

  console.log(novaLinha);


  //adicionar nova linha na tabela
  const tabelaCorpo = document.getElementById("tabelaCorpo2");
  tabelaCorpo.appendChild(novaLinha);

//contador de linhas
  const contarLinha = document.querySelectorAll(".tabela_item_2").length;
  console.log("CONTA: ", contarLinha)
  const itemsCart = document.getElementById('itemsCarrinho');
  itemsCart.innerHTML = contarLinha;

  // console.log("Tab Corpo", tabelaCorpo)

  valorTotalPagamento();
    

  console.log(valorTotal);
}


//calcula e mostar valor total

function valorTotalPagamento() {
  const linhas = document.querySelectorAll(".tabela_item");
  console.log("oioioio: ", linhas)
  let valorTotal = 0;
  
  linhas.forEach((linha) => {
    const multiplicadoValorTexto = linha.querySelector(".preco_curso").textContent;
    const multiplicadoValor = parseFloat(multiplicadoValorTexto.replace("R$ ", ""));
     console.log("OPAAAA: ", multiplicadoValor)
    valorTotal += multiplicadoValor;
  });
  

  const elementoTotal = document.querySelector("#valorTotal2");
  elementoTotal.textContent = "R$ " + valorTotal.toFixed(2);
};

//final modal de finalização de pagamento


//não entra letra no input
function noLetter(i) {

  var noLetra = i.value;

  if (isNaN(noLetra[noLetra.length - 1])) { // impede entrar outro caractere que não seja número
    i.value = noLetra.substring(0, noLetra.length - 1);
    return;
  }

}

//final não entra letra no input



//mascara pra cpf
function mascaraCPF(i) {

  var formatoCpf = i.value;

  if (isNaN(formatoCpf[formatoCpf.length - 1])) { // impede entrar outro caractere que não seja número
    i.value = formatoCpf.substring(0, formatoCpf.length - 1);
    return;
  }

  i.setAttribute("maxlength", "14");
  if (formatoCpf.length == 3 || formatoCpf.length == 7) i.value += ".";
  if (formatoCpf.length == 11) i.value += "-";

}

//final mascara pra cpf



//pega dados e alerta de concluído

function pagamentoConcluido() {
  const finalEmail1 = document.querySelector(".inputEmail1").value;
  const finalNomeCard = document.querySelector(".nomeCard").value;
  const finalNumCard = document.querySelector(".numCard").value;
  const finalDataVenc = document.querySelector(".dataVenc").value;
  const finalCvv = document.querySelector(".cvv").value;

  const finalEmail2 = document.querySelector(".inputEmail2").value;
  const finalcpf1 = document.querySelector(".cpf1").value;

  const finalEmail3 = document.querySelector(".inputEmail3").value;
  const finalcpf2 = document.querySelector(".cpf2").value;


  console.log(finalEmail1);
  console.log(finalNomeCard);
  console.log(finalNumCard);
  console.log(finalDataVenc);
  console.log(finalCvv);

  console.log(finalEmail2);
  console.log(finalcpf1);

  console.log(finalEmail3);
  console.log(finalcpf2);

  alert("Agradecemos pela compra! Um e-mail foi enviado para " + finalEmail1 + finalEmail2 + finalEmail3 + " contendo todas as informações necessárias para o acesso do curso e finalização do pagamento.");

  resetarform();
};

//final pega dados e alerta de concluído


//resetar formulários

function resetarform() {
  document.getElementById('formulario').reset();
  document.getElementById('formulario2').reset();
  document.getElementById('formulario3').reset();
};

//final resetar formulários
