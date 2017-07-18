function mainSlider(){
  document.getElementById("one").classList.add("active");
  document.getElementById("mainSlider").classList.remove("hidden");
  document.getElementById("two").classList.remove("active");
  document.getElementById("mainJdp").classList.add("hidden");
  document.getElementById("three").classList.remove("active");
  document.getElementById("mainCalc").classList.add("hidden");
}

function mainJdp(){
  document.getElementById("one").classList.remove("active");
  document.getElementById("mainSlider").classList.add("hidden");
  document.getElementById("two").classList.add("active");
  document.getElementById("mainJdp").classList.remove("hidden");
  document.getElementById("three").classList.remove("active");
  document.getElementById("mainCalc").classList.add("hidden");
}

function mainCalc(){
  document.getElementById("one").classList.remove("active");
  document.getElementById("mainSlider").classList.add("hidden");
  document.getElementById("two").classList.remove("active");
  document.getElementById("mainJdp").classList.add("hidden");
  document.getElementById("three").classList.add("active");
  document.getElementById("mainCalc").classList.remove("hidden");
}



//////////////////////////////////////////////////////////////
// premier essai slider
//
// var mySlideR;
// var myImage = ["Cascade", "Lune", "Milkyway", "Palmier", "Tigre"];
// var sm = "_sm";
// var md = "_md";
// var ori = "img/"
// var ext = ".jpg";

// figure
// var fLeft = document.getElementById("left");
// var fCenter = document.getElementById("center");
// var fRight = document.getElementById("right");

// image
// var left = document.getElementById("imgLeft");
// var center = document.getElementById("imgCenter");
// var right = document.getElementById("imgRight");
// var gd = 100;
// var pt = 0;


// var sourceL = imgSource(myImage[1]);
// var sourceC = imgSource(myImage[0]);
// var sourceR = imgSource(myImage[1]);
// var img = 0;
// var imgL = img - 1, imgR = img + 1;

// center.src = sourceC;
// left.src = sourceL;
// right.src = sourceR;



// function slideR(){
//   if(gd>0){
//     gd-=5;
//     pt+=5;
//     fCenter.style.width = gd + "%";
//     fRight.style.width = pt + "%";
//   }
//   else{
//     fCenter.style.width = "100%";
//     fRight.style.width = "0%";
//     console.log("C"+fCenter.style.width, "R"+fRight.style.width);
//     center.src = left.src;
//     left.src = "";
//     clearInterval(mySlideR);
//   }
// }

// function slideL(){
//   if(pt<100){
//     console.log("R="+fCenter.style.right, "L="+fCenter.style.left);
//     gd-=5;
//     pt+=5;
//     fCenter.style.right = "0";
//     fLeft.style.left = "0";
//     fCenter.style.width = gd + "%";
//     fLeft.style.width = pt + "%";
//     console.log("R="+fCenter.style.right, "L="+fCenter.style.left);
//   }
//   else{
//     clearInterval(mySlideL);
//   }
// }

// function slider(){
//   fCenter.style.left = "0";
//   fRight.style.right = "0";
//   mySlideR = setInterval(slideR, 50);

// }
// // var mySlideR = setInterval(slideR, 50);
// // var mySlideL = setInterval(slideL, 50);
// setInterval(slider, 2000);



//////////////////////////////////////////////////////////////
/////////////////////////// SLIDER ///////////////////////////
//////////////////////////////////////////////////////////////

// TAILLE DE L'ÉCRAN

function screenWidth(){
  var x = screen.width;
}

var sW = screen.width;

//

// img source depending screen width

function imgSource(x){
  if(sW<768){
    x = ori + x + sm + ext;
    return x;
  }
  else if(sW>768 && sW<1024){
    x = ori + x + md + ext;
    return x;
  }
  else {
    x = ori + x + ext;
    return x;
  }
}

var myImage = ["Cascade", "Lune", "Milkyway", "Palmier", "Tigre"];
var center = document.getElementById("imgCenter");
var source;
var sm = "_sm";
var md = "_md";
var ori = "img/"
var ext = ".jpg";
var index = 0;
center.src = imgSource(myImage[index]);
var Stop = clearInterval(Start);
// var Start = setInterval(slider, 2000);
var Start;



function slider(){
  center.src = imgSource(myImage[index]);
  index ++;
  if(index>myImage.length-1){
    index = 0;
  }
}

function mySlider(){
  start();
  document.getElementById("start").classList.add("hidden");
  document.getElementById("stop").classList.remove("hidden");
}

function start(){
  Start = setInterval("slider()", 2000)
}

function stop(){
  var Stop = clearInterval(Start);
  document.getElementById("stop").classList.add("hidden");
  document.getElementById("start").classList.remove("hidden");
}

function next(){
  stop();
  slider();
  // setTimeout(mySlider, 5000)
}

function prev(){
  stop();
  center.src = imgSource(myImage[index]);
  index --;
  if(index<0){
    index = myImage.length-1;
  }
  // setTimeout(mySlider, 5000)
}

// function plus(){
//   delai += 1000;
//   if(delai > 10000){
//     delai = 10000;
//   }
//   return delai;
// }

// function moin(){
//   delai -= 1000;
//   if(delai<1000){
//     delai = 1000;
//   }
//   return delai;
// }



//////////////////////////////////////////////////////////////
/////////////////////// JEU DES PAIRES ///////////////////////
//////////////////////////////////////////////////////////////

var colors = ["rouge", "rouge", "vert", "vert", "bleu", "bleu", "jaune", "jaune", "marron", "marron", "orange", "orange", "violet", "violet"];
var carte = document.getElementsByClassName("carte");
var choix = document.getElementsByClassName("choix");
// var choice = [];
var playerChoice = [];
var z = 0;
// random();

function startJdp(){
  random();
  document.getElementById("startJDP").classList.add("hidden");
  document.getElementById("jdp").classList.remove("hidden");
}

function random(){
  for(i=0; i<14; i++){
    var randomColor = Math.floor(Math.random()*colors.length);
    choix[i].classList.add(colors.splice(randomColor, 1));
  }
}

function showChoice(){
  // var myOpen = setInterval("showChoix()", 500);
  console.log(z);
  this.getElementsByTagName("div")[0].style.width = "100%";
  this.getElementsByTagName("div")[0].style.height = "100%";
  this.getElementsByTagName("div")[0].style.opacity = "1";
  choice = this.getElementsByTagName("div")[0].classList[1];
  playerChoice[z] = choice;
  // console.log(typeof playerChoice, playerChoice);
  // console.log(typeof choice, choice);
  z++;
  if(z>=2){
    stopJdp();
  }
}

function stopJdp(){
  for(i=0; i<carte.length; i++){
    carte[i].removeEventListener('click', showChoice);
  }
  compare();
}

function compare(){
  if(playerChoice[0]==playerChoice[1]){

  }
}

// function showChoix(){
//   var size = 0;
//   this.getElementsByTagName("div")[0].style.width = size + "%";
//   this.getElementsByTagName("div")[0].style.height = size + "%";
//   if(size<100){
//     size += 5;
//   }
//   else{
//     clearInterval(myOpen);
//   }
// }

for(i=0; i<carte.length; i++){
  carte[i].addEventListener('click', showChoice);
}



//////////////////////////////////////////////////////////////
//////////////////////// CALCULATRICE ////////////////////////
//////////////////////////////////////////////////////////////
