var header=document.querySelector("b")

header
header.style.color='blue'


function getRandomColor()
{
    var letters="0123456789ABCDEF";
    var color='#';
    for(var i=0;i<6;i++)
    {
        color+= letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function changeHeaderColor()
{
    colorInput=getRandomColor()
    header.style.color=colorInput;
}

setInterval("changeHeaderColor()",1000);

document.querySelector('#c3').addEventListener('selectstart', (e) =>{
    e.preventDefault();
  })

var text = document.getElementById("c3");
var strText = text.textContent;
var splitText = strText.split("");
text.textContent = "";
for(let i=0; i< splitText.length; i++){
  text.innerHTML += "<span>"+ splitText[i] + "</span>";
}
var char = 0;
var timer = setInterval(onTick, 200);

function onTick(){
  var span = text.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++
  if(char === splitText.length){
    complete();
    return;
   }
  }

  function complete(){
    clearTimeout(timer);
    timer = null;
  }