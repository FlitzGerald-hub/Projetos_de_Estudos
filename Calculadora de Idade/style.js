function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    //let sex = document.getElementsByClassName('')
    let res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano){
        res.innerHTML = `Dados invalidos, verifique-os!`
    }else{
        var fsex = document.getElementsByClassName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
        }else if (fsex[1].cheked){
            genero = 'Mulher'
        }
        /*if (fsex[0].checked){
                //masculino
                genero = 'Homem'
            if (fano >= 0 && fano < 10){
                //criança
                
            }else if (fano < 21){
                //adolecente
                
            }else if (fano < 50){
                //adulto
               
            }else{
                //idoso
                
            }
        }else if (fsex[1].checked){
                //feminino
                genero = 'Mulher'
            if (fano >= 0 && fano < 10){
                //criança

            }else if (fano < 21){
                //adolecente

            }else if (fano < 50){
                //adulto

            }else{
                //idoso

            }
        }*/
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`

    }


}