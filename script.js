let menu_open = false;
let text;
let divs;
window.onscroll = function() {
  newHeader();
  toTop();
};

document.getElementById('scrollTop').addEventListener("click", function()
{
  window.scrollTo(0, 0);
}
);


function toTop(){
  if (document.body.scrollTop > (0.5 * window.innerHeight) || document.documentElement.scrollTop > (0.5 * window.innerHeight)) {
    document.getElementById('scrollTop').style.visibility = "visible";
    document.getElementById('scrollTop').style.opacity = "1";
  } else {
    document.getElementById('scrollTop').style.visibility = "hidden";
    document.getElementById('scrollTop').style.opacity = "0";
  }
}

function newHeader() {
  if (document.body.scrollTop > (0.05 * window.innerHeight) || document.documentElement.scrollTop > (0.05 * window.innerHeight)) {
    document.getElementById("logo").classList.add("header-logo-scroll");
    document.getElementById("header").classList.add("header-scroll");
    text = document.getElementsByClassName("menu-tabs");
    divs = document.getElementsByClassName("menu-subtab");
    for (let i = 0; i < text.length; i++) {
      //text[i].classList.add("header-text");

    }
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.zIndex = "100";
    }

 } else {
   document.getElementById("header").classList.remove("header-scroll");
   text = document.getElementsByClassName("menu-tabs");
   for(let i = 0; i < text.length; i++) {
   }
   document.getElementById("logo").classList.remove("header-logo-scroll");
 }

}

function menu_openen(knop) {
  knop.classList.toggle("change");
  let menu = document.getElementById('mobiel-nav');
  let menu_ul = document.getElementById('nav-hamburger');
  if (menu_open == false) {
    menu.style.width = "80vw";
    menu_ul.style.display = "block";
    menu_open = true;
  } else {
    menu.style.width = "0px";
    menu_ul.style.display = "none";
    menu_open = false;
  }
}


function submit_form() {
    let succes = document.getElementById('succes');
    let change = true;
    if (change == true) {
      succes.style.display = "block";
      succes.style.opacity = "1";
      setTimeout(function() {
        succes.style.opacity = "0";
      }, 3000);
      setTimeout(function() {
        succes.style.display = "none";
      }, 4000);
    } else {
      change = false;
    }
}
