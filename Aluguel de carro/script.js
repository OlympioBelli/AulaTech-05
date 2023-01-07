function show(dir='timer'){
    let dataHoje = new Date()
    
    let cal = (Math.floor((dataHoje/5000))%2)

    if (dir==='left'){
        document.getElementsByClassName('li')[0].scrollIntoView()
        atual = 0

    }    
    else if (dir==='right'){
        document.getElementsByClassName('li')[1].scrollIntoView()
        atual = 1 
   
    }
    else{
        let cal = (Math.floor(((dataHoje)/5000))%2)
   
        if (cal != atual){
            if (cal === (0)){
                document.getElementsByClassName('li')[0].scrollIntoView()}
            else if (cal === (1)){
                document.getElementsByClassName('li')[1].scrollIntoView()}
            atual = cal
                }}}






function showModal(){
    let modal = document.getElementById('modal-div')
    

    let title = document.getElementById('modal-title')
    let img = document.getElementById('modal-img')
    let texto = document.getElementById('modal-texto')
    let preco = document.getElementById('modal-preco')

    if (atual==0){
        texto.innerHTML = "O câmbio de 5 marchas da Scooter Elétrica Voltz EV1 oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!" 
        preco.innerHTML = "R$ 619,90"
        title.innerHTML = "Scooter Elétrica Voltz EV1"
        img.src = "./assets/img-card-1.png"


    }
    else if (atual==1){

        texto.innerHTML = "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!" 
        preco.innerHTML = "R$ 890,90"
        title.innerHTML = "Honda CB 500X"
        img.src = "./assets/img-card-2.png"

    }
    modal.style.visibility = "visible"
}


setInterval(show, 2000)

var atual = 0
