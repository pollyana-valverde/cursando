let nav = document.querySelector("nav");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}



//depoimentos

var li = document.getElementsByClassName("testimonial-indicators")[0].getElementsByTagName("li");
var preview = document.getElementsByClassName("preview");
var index = 0;
function right(){
    if(index !== li.length){
        index ++;
        if(index !== li.length){
            li[index - 1].classList.remove("active");
            li[index].classList.add("active");
            preview[index -1].classList.remove("active-preview");
            preview[index].classList.add("active-preview");
        }
        else if(index == li.length){
            li[li.length - 1].classList.remove("active");
            li[0].classList.add("active");
            preview[preview.length - 1].classList.remove("active-preview");
            preview[0].classList.add("active-preview");
        }
    }
    if(index == li.length){
        index = 0;
    }
}

function left(){
    if(index !== -1){
        index --;
        if(index !== -1){
            li[index + 1].classList.remove("active");
            li[index].classList.add("active");
            preview[index + 1].classList.remove("active-preview");
            preview[index].classList.add("active-preview");
        }
        else if(index == -1){
            li[0].classList.remove("active");
            li[li.length - 1].classList.add("active");
            preview[0].classList.remove("active-preview");
            preview[preview.length - 1].classList.add("active-preview");
        }
    }
    if(index == -1){
        index = li.length - 1;
    }
}