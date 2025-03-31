function calcular(){
    let soma = 0
    let pontosKit = 0
    //declaração de variável sem tipo
    //recupera a cor da equipe
    
    //recupera o valor da ação social digitado
    let acaosocial = Number(document.getElementById("acaosocial").value)
    soma = soma + Number(acaosocial)
    //recupe o valor da homenagem digitado
    let homenagem = Number(document.getElementById("homenagem").value)
    soma = soma + Number(homenagem)

    let leite = Number(document.getElementById("leite").value)
    soma = soma + (2 *leite)

    let equipe = document.getElementById("equipe").value
    let kit = Number(document.getElementById("kit").value)
    if (equipe == "laranja"){
        if (kit >= 97){
            pontosKit = 5000 + ((kit - 97) * 30)
        }
        else if (kit >= 78){
            pontosKit = 4000 + ((kit - 78) * 30)
        }
        else if (kit >= 49){
            pontosKit = 2500 + ((kit - 49) * 30)
        }
        else if (kit >= 19){
            pontosKit = 1000 + ((kit - 19) * 30)
        }
        else if (kit < 19){
            pontosKit = (kit * 30)
        }
    } else if (equipe == "preta"){
        if (kit >= 103){
            pontosKit = 5000 + ((kit - 103) * 30)
        }
        else if (kit >= 82){
            pontosKit = 4000 + ((kit - 82) * 30)
        }
        else if (kit >= 52){
            pontosKit = 2500 + ((kit - 52) * 30)
        }
        else if (kit >= 21){
            pontosKit = 1000 + ((kit - 51) * 30)
        }
        else if (kit < 21){
            pontosKit = (kit * 30)
        }
    } else if (equipe == "roxa"){
        if (kit >= 102){
            pontosKit = 5000 + ((kit - 103) * 30)
        }
        else if (kit >= 82){
            pontosKit = 4000 + ((kit - 82) * 30)
        }
        else if (kit >= 51){
            pontosKit = 2500 + ((kit - 52) * 30)
        }
        else if (kit >= 20){
            pontosKit = 1000 + ((kit - 51) * 30)
        }
        else if (kit < 20){
            pontosKit = (kit * 30)
        }
    }




    alert(pontosKit)


    let suplemento = Number(document.getElementById("suplemento").value)
    soma = soma + (15 * suplemento)

    let arroz = document.getElementById("arroz").value
    soma = soma + Number(arroz)

    let feijao = document.getElementById("feijao").value
    soma = soma + Number(feijao)

    //soma os valores
    //devolve o resultado para o HTML
    document.getElementById("soma").innerHTML = soma.toFixed(2)
}