function carregar(){
    let saud = document.getElementById('saud')
    let img = document.getElementById('foto')
    let time = document.getElementById('hora')
    let date = new Date()
    let hora = date.getHours()
    time.innerHTML = `Agora são ${hora} horas` 
    if (hora >= 0 && hora <= 11){
        //bom dia
        saud.innerHTML = `Bom dia!`
        img.src = '../Relogio Dinâmico/midias/bomdia.png'
        document.body.style.background = '#deb75c'
    }else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = '../Relogio Dinâmico/midias/boatarde.png'
        saud.innerHTML = `Boa tarde!`
        document.body.style.background = '#ff7335'
    }else{
        //boa noite
        img.src = '../Relogio Dinâmico/midias/boanoite.png'
        saud.innerHTML = `Boa noite!`
        document.body.style.background = '#5a566d'
    }


}