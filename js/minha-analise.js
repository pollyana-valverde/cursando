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
  



  //icones clicados - coração
  function mudarAoClicar(like) {
    const iconesClicados = like.parentElement.querySelector(".fa-heart");
    console.log("icon:", iconesClicados);
    iconesClicados.classList.toggle("iconeAtivo");
  }

  //icones clicados - coração - lista de desejos 
  function mudarAoClicar1(like) {
    const iconesClicados = like.parentElement.querySelector(".fa-heart2");
    console.log("icon:", iconesClicados);
    iconesClicados.classList.toggle("iconeAtivo2");
  }
  

  
  
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