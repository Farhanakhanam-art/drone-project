// let navbar=document.getElementById('navbar');

// window.onscroll = function(){
//     console.log(document.documentElement.scrollTop);
//     if(document.body.scrollTop > 60 || document.documentElement.scrollTop >60){
//         navbar.style.padding = "0px 100px";
//         navbar.style.backgroundColor="black"
//     }
//     else{
//         navbar.style.padding= "45px 0";
//         navbar.style.backgroundColor="#ffca95"
//     }
// }
let navbar = document.getElementById('main_head');

window.onscroll = function () {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    navbar.style.padding = "15px 0px";
    navbar.style.backgroundColor = "rgb(68, 68, 68)";
  } else {
    navbar.style.padding = "45px 0PX";
    navbar.style.backgroundColor = "rgb(255, 202, 149)";
  }
}




let toggler=document.querySelector('#toggler');
let  navitems=document.querySelector('.nav-items');
toggler.addEventListener('click',listDisplay)

function listDisplay(){
    // alert()
    navitems.classList.toggle('showList')
}
