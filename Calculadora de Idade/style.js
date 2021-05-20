function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        res.innerHTML = "[ERRO] Confira os dados acima e tente novamente!"
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
            if (fsex[0].checked) {
                //Homem
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //crinaça
                img.setAttribute('src', 'images/homemcriança.png')
            }else if (idade < 20){
                //adolecente
                img.setAttribute('src', 'images/homemadolecente.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'images/homemadulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'images/homemidoso.png')
            }
        }else if (fsex[1].checked) {
            //Mulher
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'images/mulhercriança.png')
            }else if (idade < 20){
                //adolecente
                img.setAttribute('src', 'images/mulheradolecente.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'images/mulheradulta.png')
            }else{
                //idoso
                img.setAttribute('src', 'images/mulheridosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
    
    
}