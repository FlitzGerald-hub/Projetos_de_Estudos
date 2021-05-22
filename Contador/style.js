function contar(){
var ini = document.getElementById('ini')
var fim = document.getElementById('fim')
var pas = document.getElementById('pas')
var res = document.getElementById('res')
if (ini.value.length == 0 || fim.value.length == 0){
     res.innerHTML = `Verifique os dados acima e tente novamente!`
     /*if (pas.value.length == 0 || pas.value == 0){
        window.alert('Passo vazio ou zero será considerado passo: 1!')
        pas = 1}*/
    }else{
        res.innerHTML = `Contando:`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (i < f){
            //contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c}\u{1f449} `
            }
        }else{
            //Contagem regressiva
            for(var c = i; c >= f; c -= p){
            res.innerHTML += `${c}\u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }




}