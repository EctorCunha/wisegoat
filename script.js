
let p = document.querySelector('#texto')
let img = document.querySelector('#conselheiro')





    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => 
        console.log(texto.textContent = data.slip.advice))
    





   ///////////////////////////////////////////// 

    let url = 'https://randomfox.ca/floof/'
    

    fetch(url)
    .then(response => response.json())
    .then(data => 
        console.log(conselheiro.src = data.image))

