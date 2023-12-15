let frutas = document.createElement('alticle')
let  banana = document.createElement('button')
let  morango = document.createElement('button')
let  goiaba = document.createElement('button')
let  pessego = document.createElement('button')

banana.innerText = 'Banana'
morango.innerText ='Morango'
goiaba.innerText = 'Goiaba'
pessego.innerText = 'Pessêgo'

frutas.appendChild(banana)
frutas.appendChild(morango)
frutas.appendChild(goiaba)
frutas.appendChild(pessego)

document.querySelector('body').appendChild(frutas)