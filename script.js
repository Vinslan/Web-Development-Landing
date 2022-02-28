
function myFunction() {
  let x = document.getElementById("header__list");
  if (x.style.display === "flex") {
    x.style.display = "none";
    
  } else {
    x.style.display = "flex";
    
  }
}

// blocks
let blockOne = document.getElementById("ui");
let blockTwo = document.getElementById("web");
let blockThree = document.getElementById("mockup");

// img

let wat = document.getElementById("watchheight");

// a 

let blockOneA = document.getElementById("blOA");
let blockOneAT = document.getElementById("blOAT");

let blockTwoA = document.getElementById("blTA");
let blockTwoAT = document.getElementById("blTAT");

let blockThreeA = document.getElementById("blThA");
let blockThreeAT = document.getElementById("blThAT");


// buttons
let bAll = document.getElementById("All");
let butOne = document.getElementById("webDesign");
let butTwo = document.getElementById("UiUxDesign");
let butThree = document.getElementById("Mockups");

let watchs = document.getElementById("watch");
let pass = document.getElementById("pas");
let shirts = document.getElementById("shirt");


blockOne.style.display = "flex";
blockTwo.style.display = "flex";
blockThree.style.display = "flex";




bAll.onclick = function(){
   bAll.style.color = "#ffffff";
   bAll.style.backgroundColor = "#00897b";

   butOne.style.color = "#000000";
   butOne.style.backgroundColor = "#ffffff";

   butTwo.style.color = "#000000";
   butTwo.style.backgroundColor = "#ffffff";

   butThree.style.color = "#000000";
   butThree.style.backgroundColor = "#ffffff";

   blockOne.style.display = "flex";
   blockOne.style.flexDirection = "column";
   
   blockOne.style.marginRight = "30px";

   blockTwo.style.display = "flex";
   blockOne.style.flexDirection = "column";  
   blockTwo.style.marginRight = "30px";


   blockThree.style.display = "flex";
   blockOne.style.flexDirection = "column";



  let windowInnerWidth = window.innerWidth;
  if( windowInnerWidth === 1440){
      wat.style.width = "370px";
      wat.style.height = "370px";
    } else if( windowInnerWidth === 1024 ){
      blockOneAT.style.padding = " 100px 95px 119px 95px";
      blockOneA.style.padding = " 100px 81px 119px 81px";
      wat.style.width = "280px";
      wat.style.height = "280px";

      blockTwoA.style.padding = "100px 99px 119px 99px";
      blockTwoAT.style.padding = "100px 99px 119px 99px";

      blockThreeA.style.padding =  "100px 80px 119px 100px";
      blockThreeAT.style.padding = "100px 80px 119px 100px";
    } 
    else if( windowInnerWidth === 768 ){
      
      wat.style.width = "224px";
      wat.style.height = "224px";
      blockOneAT.style.padding = "80px 69px 82px 66px";
      blockOneA.style.padding = "83px 50px 82px 50px";

      blockTwoA.style.padding = "84px 72px 79px 68px";
      blockTwoAT.style.padding = "84px 72px 79px 68px";

      blockThreeA.style.padding =  "81px 49px 81px 75px";
      blockThreeAT.style.padding = "81px 49px 81px 75px";

    }else if(windowInnerWidth === 425 ){
     
      wat.style.width = "370px";
      wat.style.height = "370px";
      blockOneAT.style.padding = "155px 140px 155px 140px";
      blockOneA.style.padding = "155px 125px 155px 125px";
      blockOne.style.marginRight = "0px";
      
      blockTwo.style.marginRight = "0px";
      blockTwoA.style.padding = "155px 143px 155px 143px";
      blockTwoAT.style.padding = "155px 143px 155px 143px";

    }else if ( windowInnerWidth === 375){
      
      blockOneAT.style.padding = "140px 125px 140px 125px";
      blockOneA.style.padding = "150px 104px 128px 115px";
      blockOne.style.marginRight = "0px";
      wat.style.width = "338px";
      wat.style.height = "338px";

      blockTwoAT.style.padding = "140px 125px 140px 125px";
      blockTwoA.style.padding = "140px 130px 140px 130px";
      blockTwo.style.marginRight = "0px";
    }


}

butOne.onclick = function(){
  if( blockTwo.style.display === "flex" || blockThree.style.display === "flex"){
    
    blockOne.style.display = "flex";
    blockOne.style.marginRight = "0px"
    butOne.style.color = "#ffffff";
    butOne.style.backgroundColor = "#00897b";

    bAll.style.color = "#000000";
    bAll.style.backgroundColor = "#ffffff";

    blockTwo.style.display = "none";
    butTwo.style.backgroundColor = "#ffffff";
    butTwo.style.color = "#000000";
    
    blockThree.style.display = "none";
    butThree.style.backgroundColor = "#ffffff";
    butThree.style.color = "#000000";

     // Работа с адаптивом

    let windowInnerWidth = window.innerWidth;



    if( windowInnerWidth === 1024 ){

      wat.style.width = "370px";
      wat.style.height = "370px";
      blockOneAT.style.padding = "155px 140px 155px 140px";
      blockOneA.style.padding = "155px 125px 155px 125px";

    } else if( windowInnerWidth === 768 ){

      wat.style.width = "370px";
      wat.style.height = "370px";
      blockOneAT.style.padding = "155px 140px 155px 140px";
      blockOneA.style.padding = "155px 125px 155px 125px";

    } else if( windowInnerWidth === 425){

      blockOneAT.style.padding = "155px 140px 155px 140px";
      blockOneA.style.padding = "150px 104px 128px 115px";

    }



    // Работа с адаптивом

  } 
  else{

    blockOne.style.display = "flex";
    butOne.style.color = "#000000";
    butOne.style.backgroundColor = "#ffffff";
    blockOne.style.marginRight = "30px";

    bAll.style.color = "#ffffff";
    bAll.style.backgroundColor = "#00897b";

    
    blockTwo.style.display = "flex";
    
    blockThree.style.display = "flex";
    
    let windowInnerWidth = window.innerWidth;

    if(windowInnerWidth === 1024){

      blockOneAT.style.padding = " 100px 95px 119px 95px";
      blockOneA.style.padding = " 100px 81px 119px 81px";
      wat.style.width = "280px";
      wat.style.height = "280px";

    } else if( windowInnerWidth === 768){

      wat.style.width = "224px";
      wat.style.height = "224px";
      blockOneAT.style.padding = "80px 69px 82px 66px";
      blockOneA.style.padding = "83px 50px 82px 50px";
      
  }else if(windowInnerWidth === 425 ){

      wat.style.width = "370px";
      wat.style.height = "370px";
      blockOneAT.style.padding = "155px 140px 155px 140px";
      blockOneA.style.padding = "155px 125px 155px 125px";
      blockOne.style.marginRight = "0px";

  }else if( windowInnerWidth === 375){

      blockOneAT.style.padding = "140px 125px 140px 125px";
      blockOneA.style.padding = "150px 104px 128px 115px";
      blockOne.style.marginRight = "0px";
      wat.style.width = "338px";
      wat.style.height = "338px";

    }
  }
}

butTwo.onclick = function(){
   if(  blockOne.style.display === "flex" || blockThree.style.display === "flex"){
    
    blockTwo.style.display = "flex";
    blockTwo.style.marginRight = "0px";
    butTwo.style.color = "#ffffff";
    butTwo.style.backgroundColor = "#00897b";

    bAll.style.color = "#000000";
    bAll.style.backgroundColor = "#ffffff";

    blockOne.style.display = "none";
    butOne.style.backgroundColor = "#ffffff";
    butOne.style.color = "#000000";
    
    blockThree.style.display = "none";
    butThree.style.backgroundColor = "#ffffff";
    butThree.style.color = "#000000";

    let windowInnerWidth = window.innerWidth;

    if( windowInnerWidth === 1024 ){
      
      blockTwoA.style.padding = "155px 143px 155px 143px";
      blockTwoAT.style.padding = "155px 143px 155px 143px";

    } else if(windowInnerWidth === 768){
      
      blockTwoA.style.padding = "155px 143px 155px 143px";
      blockTwoAT.style.padding = "155px 143px 155px 143px";

    }
   
  } else{

    blockTwo.style.display = "flex";
    butTwo.style.color = "#000000";
    butTwo.style.backgroundColor = "#ffffff";
    blockTwo.style.marginRight = "30px";
    bAll.style.color = "#ffffff";
    bAll.style.backgroundColor = "#00897b";

    blockOne.style.display = "flex";
    
    blockThree.style.display = "flex";

    let windowInnerWidth = window.innerWidth;
    
    if( windowInnerWidth === 1024 ){

      blockTwoA.style.padding = "100px 99px 119px 99px";
      blockTwoAT.style.padding = "100px 99px 119px 99px";

    } 
    else if(windowInnerWidth === 768 ){

      blockTwoA.style.padding = "84px 72px 79px 68px";
      blockTwoAT.style.padding = "84px 72px 79px 68px";

    } else if (windowInnerWidth === 425 ){

      blockTwo.style.marginRight = "0px";
       blockTwoA.style.padding = "155px 143px 155px 143px";
      blockTwoAT.style.padding = "155px 143px 155px 143px";

    } else if( windowInnerWidth === 375){

      blockTwoAT.style.padding = "140px 125px 140px 125px";
      blockTwoA.style.padding = "140px 130px 140px 130px";
      blockTwo.style.marginRight = "0px";
      
    }
  }
}

butThree.onclick = function(){
  if(  blockOne.style.display === "flex" || blockTwo.style.display === "flex"){
    
    blockThree.style.display = "flex";
    butThree.style.color = "#ffffff";
    butThree.style.backgroundColor = "#00897b";


    bAll.style.color = "#000000";
    bAll.style.backgroundColor = "#ffffff";

    blockOne.style.display = "none";
    butOne.style.backgroundColor = "#ffffff";
    butOne.style.color = "#000000";
    
    blockTwo.style.display = "none";
    butTwo.style.backgroundColor = "#ffffff";
    butTwo.style.color = "#000000";

    let windowInnerWidth = window.innerWidth;

    if( windowInnerWidth === 1024 ){

      blockThreeA.style.padding =  "155px 135px 155px 135px";
      blockThreeAT.style.padding = "155px 135px 155px 135px";

    }
    else if(windowInnerWidth === 768 ){

      blockThreeA.style.padding =  "155px 135px 155px 135px";
      blockThreeAT.style.padding = "155px 135px 155px 135px";

    }
   
   
  } else{

    blockThree.style.display = "flex";
    butThree.style.color = "#000000";
    butThree.style.backgroundColor = "#ffffff";

    bAll.style.color = "#ffffff";
    bAll.style.backgroundColor = "#00897b";

    blockOne.style.display = "flex";

    blockTwo.style.display = "flex";
    
    let windowInnerWidth = window.innerWidth;

    if( windowInnerWidth === 1024 ){

      blockThreeA.style.padding =  "100px 80px 119px 100px";
      blockThreeAT.style.padding = "100px 80px 119px 100px";

    }
    else if( windowInnerWidth === 768 ){

      blockThreeA.style.padding =  "81px 49px 81px 75px";
      blockThreeAT.style.padding = "81px 49px 81px 75px";

    }

  } 
}

