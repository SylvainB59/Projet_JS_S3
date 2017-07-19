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

var colors = ["rouge", "rouge", "vert", "vert", "bleu", "bleu", "jaune", "jaune", "pink", "pink", "orange", "orange", "violet", "violet"];
var test = [];
var carte = document.getElementsByClassName("carte");
var choix = document.getElementsByClassName("choix");
var playerChoice = [];
var z = 0;
var coup = 0;
var end = 0;
var m;
var n;


function startJdp(){
  test = [];
  random();
  document.getElementById("startJDP").classList.add("hidden");
  document.getElementById("jdp").classList.remove("hidden");
  document.getElementById("result").innerHTML = "CHOOSE TWO CARDS PLZ";
}

function random(){
  for(i=0; i<14; i++){
    var randomColor = Math.floor(Math.random()*colors.length);
    var choixRandom = colors.splice(randomColor, 1)
    choix[i].classList.add(choixRandom);
    test.push(choixRandom[0]);
  }
  startGame();
}

function startGame(){
  z = 0;
  coup++;
  document.getElementById("score").innerHTML = "HIT n°" + coup;
  for(i=0; i<carte.length; i++){
    carte[i].addEventListener('click', showChoice);
  }
}

function showChoice(){
  if(z==0){
    m = this.getElementsByTagName("div")[0];
  }
  else if(z==1){
    n = this.getElementsByTagName("div")[0];
  }
  if(this.getElementsByTagName("div")[0].style.width == "100%"){
    document.getElementById("result").innerHTML = "ANOTHER CARD PLZ";
  }
  else{
    this.getElementsByTagName("div")[0].style.width = "100%";
    this.getElementsByTagName("div")[0].style.height = "100%";
    this.getElementsByTagName("div")[0].style.opacity = ".7";
    this.getElementsByTagName("div")[0].style.borderRadius = "0%";
    choice = this.getElementsByTagName("div")[0].classList[1];
    playerChoice[z] = choice;
    z++;
    if(z>=2){
      stopJdp();
    }
  }
}

function stopJdp(){
  for(i=0; i<carte.length; i++){
    carte[i].removeEventListener('click', showChoice);
  }
  compare();
}

function compare(){
  if(playerChoice[0]!=playerChoice[1]){
    document.getElementById("result").innerHTML = "NO";
    playerChoice = [];
    setTimeout(function()
    {
      m.style.width = "0%";
      m.style.height = "0%";
      m.style.opacity = "0";
      m.style.borderRadius = "100%";
      n.style.width = "0%";
      n.style.height = "0%";
      n.style.opacity = "0";
      n.style.borderRadius = "100%";
      startGame();
    }, 800)
  }
  else{
    document.getElementById("result").innerHTML = "YES";
    playerChoice = [];
    end++;
    if(end == 7){
      setTimeout(stopJDP, 2000)
    }
    else{
      startGame();
    }
  }
}

function stopJDP(){
  for(i=0; i<choix.length; i++){
    choix[i].style.width = "0%";
    choix[i].style.height = "0%";
    choix[i].style.opacity = "0";
    choix[i].style.borderRadius = "100%";
  }
  document.getElementById("endJdp").style.opacity = "1";
  document.getElementById("endJdp").style.zIndex = "10";
  document.getElementById("endJdp").getElementsByTagName("p")[0].innerHTML = "YOU WIN IN " + coup + " HITS";
}

function replayJdp(){
  for(i=0; i<choix.length; i++){
    choix[i].classList.remove(test[i]);
  }
  document.getElementById("endJdp").style.opacity = "0";
  document.getElementById("endJdp").style.zIndex = "-5";
  document.getElementById("startJDP").classList.remove("hidden");
  document.getElementById("jdp").classList.add("hidden");
  z = 0;
  coup = 0;
  end = 0;
  colors = test;
}




//////////////////////////////////////////////////////////////
//////////////////////// CALCULATRICE ////////////////////////
//////////////////////////////////////////////////////////////
