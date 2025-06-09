// images array-----------------------------
const darkColorsArr = [
  "img/image.png",
  "img/image2.png",
  "img/image3.png",
];
// \quotes array----------------------------------
const thought =[
    '"For every minute you are angry you lose sixty seconds of happiness."',
    '"In three words I can sum up everything I’ve learned about life: it goes on."',
    '"Out of suffering have emerged the strongest souls; the most massive characters are seared with scars."'
];

// index generation function----------------------------------
function getRandomIndex(){
    const randomIndex=Math.floor(darkColorsArr.length*Math.random());
    return randomIndex;
}

// body select put image by function by genrating no.
// onclick btn function runs
const body=document.querySelector("body");
const info=document.querySelector("#info");

// image generation function-----------------------------------
function changebg(){
    let ind=getRandomIndex();
    const bg=darkColorsArr[ind];
    // body.style.background=bg;
    body.style.backgroundImage =`url('${bg}')`;
  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundPosition = "center";
  info.innerText=thought[ind];
}

// button usage--------------------------------------
const btn=document.querySelector("#btn");
btn.onclick=changebg;
