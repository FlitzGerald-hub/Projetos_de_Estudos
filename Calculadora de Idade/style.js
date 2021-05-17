function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    //let sex = document.getElementsByClassName('')
    let res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano){
        res.innerHTML = `Dados invalidos, verifique-os!`
    }else{
        let fsex = document.getElementsByClassName('radsex')
        let idade = ano - fano.value
        res.innerHTML = `de ${idade} anos`
        if (fsex == 0){
            //masculino
            if (fano >= 0 && fano < 10){
                //criança
                res.innerHTML += 'homem'
            }else if (fano >= 10 && fano < 18){
                //adolecente
                res.innerHTML += 'homem'
            }else if (fano >= 18 && fano < 50){
                //adulto
                res.innerHTML += 'homem'
            }else{
                //idoso
                res.innerHTML += 'homem'
            }
        }else{
            //feminino
            if (fano >= 0 && fano < 10){
                //criança
            }else if (fano >= 10 && fano < 18){
                //adolecente
            }else if (fano >= 18 && fano < 50){
                //adulto
            }else{
                //idoso
            }
        }

    }


}