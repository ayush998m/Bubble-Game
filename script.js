

var timer = 60;

var scorev = 0;

var hitrn = 0;

function bubble(){


var clutter = '';

for(var i = 0; i<=95; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector('#pbottom').innerHTML = clutter;
}

function runtimer(){
   let time =  setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector('#timerval').textContent = timer;
        }
        else{
            clearInterval(time);
            document.querySelector('#pbottom').innerHTML = "";
        }

    },1000)
}

function hitvalu(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector('#hitval').textContent = hitrn;
}



function increaseScore(){
    scorev += 10; 
    document.querySelector('#scoreval').textContent = scorev;
}


document.querySelector('#pbottom').addEventListener('click', function (details){
     var clicked = Number(details.target.textContent);
    if(clicked === hitrn){
       increaseScore();
       bubble();
       hitvalu();

   }
})

bubble();
runtimer();
hitvalu();

