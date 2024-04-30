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
