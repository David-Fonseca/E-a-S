const container = document.querySelector(".container");
let color ="#0000ff";
console.log(container);
let slider = document.getElementById('dimension');
let output=document.getElementById('demo');
let rain = document.getElementById('rainbow');
let erase = document.getElementById('eraser');
let mode='c';

let boxes = document.querySelectorAll('.sixteen-box');
function clearGrid(){
    
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
}

function createGrid(val){
    clearGrid();
    for(let i =0; i<val; i++){
        let r = document.createElement('div');
        r.classList.add('row');
        container.appendChild(r);
        for(let j=0; j<val; j++){
            const box = document.createElement('div');
            box.classList.add('sixteen-box');
            r.appendChild(box);
        }
    }
    boxes = document.querySelectorAll('.sixteen-box');
    boxes.forEach((box)=>{
        box.addEventListener('mouseover',colorBox)
    })
}



let cp=document.getElementById('colorpicker');


function colorBox(e){
    console.log(mode)
    if(mode === 'c'){
        e.target.style.backgroundColor=color;
    }
    else if(mode==='e'){
        e.target.style.backgroundColor='white';
    }
    else{
        e.target.style.backgroundColor=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
    }
}
let clear = document.getElementById('clear');


window.addEventListener('load', createGrid(16));

slider.addEventListener('input', function(){
    let value= slider.value;
    createGrid(value);
})


clear.addEventListener('click',function(){
    boxes.forEach((box)=>{box.style.backgroundColor='white'})
})

cp.addEventListener('input', function(){
    mode='c';
    color=cp.value;
});
boxes.forEach((box)=>{
    box.addEventListener('mouseover',colorBox)
})

rain.addEventListener('click',function(){
    mode='r'
})
erase.addEventListener('click',function(){
    mode='e'
})