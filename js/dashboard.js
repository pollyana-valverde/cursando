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

Orders.forEach(order => {
  const tr = document.createElement('tr');
  const trContent = `
    <td>${order.nomeProduto}</td>
    <td>${order.numeroProduto}</td>
    <td>${order.statusPagamento}</td>
    <td class="${order.status === 'Recusado' ? 'danger' : order.status === 'Pendente' ? 'warning' : 'primary'}">${order.status}</td>
    <td class="primary">Detalhes</td>
    `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});


//criar lembrete

function criarLembrete() {
  const lembreteNome = document.getElementById("nomeLembre").value;
  const lembreteDia = document.getElementById("diaLembre").value;
  const lembreteHora = document.getElementById("horaLembre").value;
  const lembreteIcon = document.querySelector(".nav-link.active span i").className;
  // const pegaCorBg = document.querySelector(".nav-link.active").className;
  const pegaCorBg = document.querySelector(".nav-link.active").className;
  const pegaCorCerta = pegaCorBg.split("nav-link")[1];

  const lembreDataFormat = lembreteDia.split('-').reverse().join('/');

  console.log(lembreteNome)
  console.log(lembreDataFormat)
  console.log(lembreteHora)
  console.log(lembreteIcon)
  console.log(pegaCorBg)
  console.log(pegaCorCerta)


  const novoLembrete = document.createElement("div");
  novoLembrete.innerHTML = `
  <div class="notification">
    <div class="icon ${pegaCorCerta}">
      <span class="material-symbols-outlined">
      <i class="${lembreteIcon}" aria-hidden="true"></i>
      </span>
    </div>
    <div class="content">
      <div class="info">
        <h3>${lembreteNome}</h3>
          <small class="text-muted">${lembreDataFormat}</small><br>
          <small class="text-muted">${lembreteHora}</small>
      </div>
    </div>
    <span class="material-symbols-outlined "  data-bs-toggle="dropdown" aria-expanded="false">
       more_vert
    </span>
    <ul class="dropdown-menu">
       <li class="dropdown-item" onclick="excluirLinha(this)">Deletar</li>
    </ul>
  </div>
  `;

  const lembrete = document.getElementById("reminder");
  lembrete.appendChild(novoLembrete);

  console.log(lembrete)


  resetarform();
}


//resetar form lembrete

function resetarform() {
  document.getElementById('formLemre').reset();
};


//excluir lembrete

function excluirLinha(icon) {
  const linha = icon.parentElement.parentElement; // A linha é pai da célula do ícone
  linha.remove();

}


//btn sino notificação
function NotificationLembre(x) {
  x.classList.toggle("fa-bell-slash");
}



//animação contador de números

let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue).toLocaleString('en-US');
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter)
    }
    

  }, duration);
});

