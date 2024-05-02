document.addEventListener('mousemove',()=>{
    // let soap = document.querySelector('.soap');
    // // Ligando o movimento do mouse com a image
    // soap.style.left = (event.pageX) + 'px';
    // soap.style.top = (event.pageY) + 'px';
    //-------------------------------------------
    //Criando o rastro de bolhas
    let i = document.createElement('i');
    i.style.left = (event.pageX) + 'px';
    i.style.top = (event.pageY) + 'px';
    
    // Deixando o tamanho das bolhas aleatorios
    i.style.scale = `${Math.random() * 2 + 1}`;
    i.style.setProperty('--x', getRandomPosition());
    i.style.setProperty('--y', getRandomPosition());
    
    function getRandomPosition(){
        return `${Math.random() * 400 - 200}px`;
    }


    document.body.appendChild(i);
    //--------------------------------------------
    //Apagando o rastro de bolhas
    setTimeout(() =>{
        document.body.removeChild(i);
    },2000)
})