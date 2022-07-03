const sabre = window.document.getElementById('sabre')
const plasmablue = window.document.getElementById('plasma-blue')
const sabre2 = window.document.getElementById('sabre2')
const plasmared = document.getElementById('plasma-red')
const fundo = document.getElementById('fundo')
const sabreon = document.getElementById('sabreon')
const sabreoff = document.getElementById('sabreoff')
const tema = document.getElementById('tema')
const breath = document.getElementById('breath')



function ligar() {
    plasmablue.style.height = '310px'
    fundo.classList.remove('fundo')
    fundo.classList.remove('vader')
    fundo.classList.add('luke')
    sabreon.play()    
    tema.play() //tirei o tema no html       
}

function desligar() {
    plasmablue.style.height = '0px'
    fundo.style.opacity = '0'
    fundo.classList.add('fundo');    
    sabreoff.play()
}
function ligar2() {
    plasmared.style.height = '310px'
    fundo.classList.remove('fundo')
    fundo.classList.remove('luke')
    fundo.classList.add('vader')
    sabreon.play()
    breath.play()
}

function desligar2() {
    plasmared.style.height = '0px'
    fundo.style.opacity = '0'
    fundo.classList.add('fundo')
    sabreoff.play()
    breath.pause()
}

  //resolução navegador
  document.write(screen.width+'x'+screen.height);
   
  //resolução 'real' navegador
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
  document.write(width+'x'+height);

  console.log (width)