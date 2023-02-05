const firstBox = document.querySelector('#box1')
const secondBox = document.querySelector('#box2')
const first = document.querySelector('#first');
const second = document.querySelector('#second');

const showBox1 = ()=>{
    second.style.backgroundColor = 'black'
    firstBox.style.display = 'none';
    secondBox.style.display = 'block'
    first.style.backgroundColor = 'white'
    first.style.color = 'black';
    second.style.color= 'white';
}
const showBox2 = ()=>{
    first.style.backgroundColor = 'black'
    firstBox.style.display = 'block'
    secondBox.style.display = 'none';
    first.style.color= 'white'
    second.style.color= 'black';
    second.style.backgroundColor = 'white'
}

// init call 
showBox2()