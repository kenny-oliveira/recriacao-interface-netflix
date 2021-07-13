function ChangeCssColor(tipo,alvo,novacor){
   if (tipo == "set"){
    document.documentElement.style
    .setProperty('--'+alvo, novacor);
   }else{
  return getComputedStyle(document.documentElement) .getPropertyValue('--'+alvo);
   }
}

function setdisplaybyid(id,display){
    document.getElementById(id).style.display = display;
}

function Togglenavbar(){
 var navbar = document.getElementById("navbar")
 var currentopacity = navbar.style.opacity
 if (currentopacity == 0) {
    navbar.style.opacity = 1;
 }else{
    navbar.style.opacity = 0;
 }  
}

function Togglesearch(elemento){
    elemento.style.right = "50%"
    elemento.style.cursor = "unset"
    setdisplaybyid("voltar","block");
    setdisplaybyid("linet","none");
    setdisplaybyid("linav","none");
    setdisplaybyid("searchtext","block");
    ChangeCssColor("set","preta","#101010");
    ChangeCssColor("set","cinzamaisescuro","rgb(24, 24, 24)");
    ChangeCssColor("set","cinzaescuro","#aaaaaa");
    ChangeCssColor("set","branco","#cacaca");
}

function Togglevoltar(){
    document.getElementById("search").style.right = "0%";
    document.getElementById("search").style.cursor = "pointer"
    setdisplaybyid("voltar","none");
    setdisplaybyid("linet","inline-block");
    setdisplaybyid("linav","inline-block");
    setdisplaybyid("searchtext","none");
    ChangeCssColor("set","preta","#141414")
    ChangeCssColor("set","cinzamaisescuro","rgb(39, 39, 39)")
    ChangeCssColor("set","cinzaescuro","#cacaca")
    ChangeCssColor("set","branco","white")

}


$('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
})